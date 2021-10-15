import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import Layout from '../features/common/layout/components/';
import ProfileMarker from "../features/userMarker/components/profileMarker";
import UserMarker from "../features/userMarker/components/userMarker";
import NewPositionCard from '../features/userInfo/components/profileInfo/newPositionCard';
import Profile from "../features/profile/components/profile";
import User from "../features/profile/components/user";
import {useFetchQuery} from "../hooks/useFetchQuery"; 
import {useFetchLazyQuery} from "../hooks/useFetchLazyQuery";
import {useRouter} from "next/router";
import RateUser from '../features/rateUser';
import { useQueryClient } from 'react-query';
import { reducer } from '../reducers/mainPage';

const  Index = ()=> {
  const options = {fullscreenControl: false ,disableDoubleClickZoom:true,clickableIcons: false}
  const [state,dispatch] = React.useReducer(reducer,{
    newGeolocation:undefined,
    defaultGeolocation:undefined,
    disableMapClick:false,
    showNewUserPositionCard:false,
    bounds:{ne:{lat:undefined,lng:undefined},nw:{lat:undefined,lng:undefined},sw:{lat:undefined}},
    showPage:false
  })
  const {newGeolocation,defaultGeolocation,disableMapClick,showNewUserPositionCard,bounds,showPage} = state
  const profile = useFetchQuery("user","http://localhost:8080/api/profile/");    
  const users = useFetchLazyQuery("users",`http://localhost:8080/api/position/users/?neLat=${bounds.ne.lat}&neLng=${bounds.ne.lng}&nwLat=${bounds.nw.lat}&nwLng=${bounds.nw.lng}&swLat=${bounds.sw.lat}`,Boolean(bounds.ne.lat))
  const {query,push} = useRouter();
  const client = useQueryClient()
  React.useEffect(()=>{  
    const isUserLogged = localStorage.getItem("token");
    if(isUserLogged===null){
      return push("/auth/signin")
    }
    dispatch({type:"set_showPage",payload:true})
    if(!profile.isLoading&&!(profile.data.user.longitude&&profile.data.user.latitude)){
    navigator.geolocation.getCurrentPosition((position)=>{
     
       dispatch({type:"set_defaultGeoLocation",payload:{
        longitude:position.coords.longitude,
        latitude:position.coords.latitude
      }})

       
      })
    }
      
    return ()=>dispatch({type:"set_defaultGeoLocation",payload:undefined})
  },[profile.isLoading,profile.data])
  const handleClick = ({lng,lat})=>{
    if(!disableMapClick){
       dispatch({type:"set_showNewUserPositionCard",payload:true})
       dispatch({type:"set_newGeoLocation",payload:{
        longitude:lng,
        latitude:lat
      }})

     } 
  } 
  const handleCloseCard = (dispatch)=>{
    return ()=>{
      dispatch({type:"set_showNewUserPositionCard",payload:false})
      dispatch({type:"set_disableMapClick",payload:false})
    }
  } 
  const handleFetchTalents = ({bounds})=>{
    dispatch({type:"set_bounds",payload:bounds})
    client.invalidateQueries('users')
   
  }
  const handleOnChildEnter = ()=>dispatch({type:"set_disableMapClick",payload:true})
  const handleOnChildLeave = ()=>dispatch({type:"set_disableMapClick",payload:false})
  if(!showPage){
    return null
  }
   
  if(!profile.isLoading&&!(profile.data.user.longitude&&profile.data.user.latitude)&&!defaultGeolocation){
    return(
      <div>allow the browser to take geolocation position</div>
    )
  }

    return (
      !profile.isLoading?(
        <Layout data={profile.data.user}>

        {query.id===profile.data.user._id?<Profile data={profile.data.user}/>:null}
        {query.id&&query.id!==profile.data.user._id?<User _id={query.id} profileId={profile.data.user._id}/>:null}
        {query.talentId&&query.userName?<RateUser userId={query.talentId} userName={query.userName} profile={profile.data.user}/>:null}
       <div style={{ height: '100vh', width: '100%' }}>   
          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyATBu4y1OPMu1ctdhBFvBy3L1XecgDyG1k"  }}
            defaultCenter={defaultGeolocation?{lat:defaultGeolocation.latitude,lng:defaultGeolocation.longitude}:{lat:profile.data.user.latitude,lng:profile.data.user.longitude}}
            defaultZoom={17}
            options={options} 
            onClick={handleClick}
            onChange={handleFetchTalents}
            yesIWantToUseGoogleMapApiInternals 
          > 
            {showNewUserPositionCard?<NewPositionCard handleCloseCard={handleCloseCard(dispatch)} lat={newGeolocation?newGeolocation.latitude:null} lng={newGeolocation?newGeolocation.longitude:null} data={profile.data.user} onMouseEnter={handleOnChildEnter} onMouseLeave={handleOnChildLeave}   />:null }
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
     ):null
     
    )
  
}

export default Index;

