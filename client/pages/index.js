import React from 'react';
import GoogleMapReact from 'google-map-react';
import Layout from '../features/common/layout/components/';
import {useFetchQuery} from "../hooks/useFetchQuery"; 
import UserPosition from "../features/userPosition/components";
import ProfileCard from "../features/userPosition/components/profileCard";
const  Index = ()=> {
  const options = {fullscreenControl: false ,disableDoubleClickZoom:true,clickableIcons: false}
  const [newGeolocation,setNewGeoLocation] = React.useState(undefined);
  const [defaultGeolocation,setDefaultGeoLocation] = React.useState(undefined);
  const [disableMapClick,setDisableMapClick] = React.useState(false);
  const [showNewUserPositionCard,setShowNewUserPositionCard] = React.useState(false);
  const {isLoading,data} = useFetchQuery("user","http://localhost:8080/api/profile/");    
 
 React.useEffect(()=>{  
    navigator.geolocation.getCurrentPosition((position)=>{
      if(!isLoading && data.user.longitude!==position.coords.longitude&&data.user.latitude!==position.coords.latitude ){
          if(data.user.longitude||data.user.latitude){
            return setDefaultGeoLocation({
             longitude:data.user.longitude,
             latitude:data.user.latitude
           })
          }
      }
        return  setDefaultGeoLocation({
           longitude:position.coords.longitude,
           latitude:position.coords.latitude
         })

    })
    return ()=>setDefaultGeoLocation(undefined)
  },[isLoading,data])

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
  if(!isLoading && defaultGeolocation === undefined){
          return(
          <div>
             allow the browser to take geolocation position 
          </div>
          )
    }
    return (
       isLoading?<div>isLoading....</div>:(
         <Layout data={data.user}>
       <div style={{ height: '100vh', width: '100%' }}>   
          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyATBu4y1OPMu1ctdhBFvBy3L1XecgDyG1k"  }}
            defaultCenter={{lat:defaultGeolocation.latitude,lng:defaultGeolocation.longitude}}
            defaultZoom={17}
            options={options} 
            onClick={handleClick}
           yesIWantToUseGoogleMapApiInternals 
          >
            {showNewUserPositionCard?<ProfileCard handleCloseCard={handleCloseCard(showNewUserPositionCard,setShowNewUserPositionCard)} lat={newGeolocation?newGeolocation.latitude:null} lng={newGeolocation?newGeolocation.longitude:null} data={data.user} onMouseEnter={handleOnChildEnter} onMouseLeave={handleOnChildLeave}   />:null }
          
            <UserPosition
              lat={data.user.latitude}
              lng={data.user.longitude}
             data={data.user}
              isProfile={false}
              handleCloseCard={handleCloseCard}
             onMouseEnter={handleOnChildEnter} onMouseLeave={handleOnChildLeave} 
              />

          </GoogleMapReact>
        </div>
        </Layout>
     )
     
    )
  
}

export default Index;