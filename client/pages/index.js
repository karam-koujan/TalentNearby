import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import Layout from '../features/common/layout/components/';
import ProfileMarker from "../features/userMarker/components/profileMarker";
import UserMarker from "../features/userMarker/components/userMarker";
import NewPositionCard from '../features/userInfo/components/profileInfo/newPositionCard';
import Profile from "../features/profile/components";
import {useFetchQuery} from "../hooks/useFetchQuery"; 
import {useFetchLazyQuery} from "../hooks/useFetchLazyQuery";
import {useRouter} from "next/router";
import RateUser from '../features/rateUser';

const  Index = ()=> {
  const options = {fullscreenControl: false ,disableDoubleClickZoom:true,clickableIcons: false}
  const [newGeolocation,setNewGeoLocation] = React.useState(undefined);
  const [defaultGeolocation,setDefaultGeoLocation] = React.useState(undefined);
  const [disableMapClick,setDisableMapClick] = React.useState(false);
  const [showNewUserPositionCard,setShowNewUserPositionCard] = React.useState(false);
  const [bounds,setBounds] = React.useState({ne:{lat:undefined,lng:undefined},nw:{lat:undefined,lng:undefined},sw:{lat:undefined}});
  const profile = useFetchQuery("user","http://localhost:8080/api/profile/");    
  const users = useFetchLazyQuery("users",`http://localhost:8080/api/position/users/?neLat=${bounds.ne.lat}&neLng=${bounds.ne.lng}&nwLat=${bounds.nw.lat}&nwLng=${bounds.nw.lng}&swLat=${bounds.sw.lat}`,Boolean(bounds.ne.lat))
  const {query} = useRouter();
  React.useEffect(()=>{  
    
    if(!profile.isLoading&&!(profile.data.user.longitude&&profile.data.user.latitude)){
    navigator.geolocation.getCurrentPosition((position)=>{
     
        setDefaultGeoLocation({
         longitude:position.coords.longitude,
         latitude:position.coords.latitude
       })

       
      })
    }
      
    return ()=>setDefaultGeoLocation(undefined)
  },[profile.isLoading,profile.data])
  const handleClick = ({lng,lat})=>{
    if(!disableMapClick){
       setShowNewUserPositionCard(true)
       setNewGeoLocation({
          longitude:lng,
          latitude:lat
        })

     } 
  } 
  const handleCloseCard = (state,setState)=>{
    return ()=>{
      setState(false)
      setDisableMapClick(false)
    }
  } 
  const handleOnChildEnter = ()=>setDisableMapClick(true)
  const handleOnChildLeave = ()=>setDisableMapClick(false)

  if(!profile.isLoading&&!(profile.data.user.longitude&&profile.data.user.latitude)&&!defaultGeolocation){
    return(
      <div>allow the browser to take geolocation position</div>
    )
  }

    return (
      !profile.isLoading?(
        <Layout data={profile.data.user}>

        {query.id?<Profile _id={query.id} profileId={profile.data.user._id}/>:null}
        {query.talentId&&query.userName?<RateUser userId={query.talentId} userName={query.userName} profile={profile.data.user}/>:null}
       <div style={{ height: '100vh', width: '100%' }}>   
          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyATBu4y1OPMu1ctdhBFvBy3L1XecgDyG1k"  }}
            defaultCenter={defaultGeolocation?{lat:defaultGeolocation.latitude,lng:defaultGeolocation.longitude}:{lat:profile.data.user.latitude,lng:profile.data.user.longitude}}
            defaultZoom={17}
            options={options} 
            onClick={handleClick}
            onChange={({bounds})=>setBounds(bounds)}
           
            yesIWantToUseGoogleMapApiInternals 
          > 
            {showNewUserPositionCard?<NewPositionCard handleCloseCard={handleCloseCard(showNewUserPositionCard,setShowNewUserPositionCard)} lat={newGeolocation?newGeolocation.latitude:null} lng={newGeolocation?newGeolocation.longitude:null} data={profile.data.user} onMouseEnter={handleOnChildEnter} onMouseLeave={handleOnChildLeave}   />:null }
            {!users.isLoading&&!users.disabledFetching?users.data.users.map(({_id,longitude,latitude})=>(
           <UserMarker  
           key={_id}
          handleCloseCard={handleCloseCard}
          onMouseEnter={handleOnChildEnter} 
          onMouseLeave={handleOnChildLeave} 
          profile={profile.data.user}
          lat={latitude}
          lng={longitude}
          _id={_id}
          />
         )):null}
           <ProfileMarker
              lat={profile.data.user.latitude}
              lng={profile.data.user.longitude}
             data={profile.data.user}
              handleCloseCard={handleCloseCard}
             onMouseEnter={handleOnChildEnter} onMouseLeave={handleOnChildLeave} 
              />

          </GoogleMapReact>
        </div>
      </Layout>
     ):"...isLoading"
     
    )
  
}

export default Index;