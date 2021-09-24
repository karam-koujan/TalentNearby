import React from 'react';
import GoogleMapReact from 'google-map-react';
import Layout from '../features/common/layout/components/';
import {useFetchQuery} from "../hooks/useFetchQuery"; 
import UserPosition from "../features/userPosition/components";
import UserCard from "../features/userPosition/components/userCard";
const  Index = ()=> {
  const options = {fullscreenControl: false ,disableDoubleClickZoom:true,clickableIcons: false}
  const [newGeolocation,setNewGeoLocation] = React.useState(undefined);
  const [defaultGeolocation,setDefaultGeoLocation] = React.useState(undefined);
  const [enableMapClick,setEnableMapClick] = React.useState(false);
  const [showNewUserPosition,setShowNewUserPosition] = React.useState(false);
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
     setShowNewUserPosition(true)
     if(!enableMapClick){
       setNewGeoLocation({
          longitude:lng,
          latitude:lat
        })

     } 
  }  
  const handleOnChildEnter = ()=>setEnableMapClick(true)
  const handleOnChildLeave = ()=>setEnableMapClick(false)
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
            {showNewUserPosition?<UserCard lat={newGeolocation.latitude} lng={newGeolocation.longitude} userName={data.user.userName} onMouseEnter={handleOnChildEnter} onMouseLeave={handleOnChildLeave}   profileImg={data.user.profileImg}/>:null }
            <UserPosition
              lat={data.user.latitude}
              lng={data.user.longitude}
              userName={data.user.userName}
              profileImg={data.user.profileImg}
              isProfile={false}
             onMouseEnter={handleOnChildEnter} onMouseLeave={handleOnChildLeave} 
              />
            

          </GoogleMapReact>
        </div>
        </Layout>
     )
     
    )
  
}

export default Index;