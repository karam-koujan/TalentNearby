import React from 'react';
import GoogleMapReact from 'google-map-react';
import Layout from '../features/common/layout/components/';
import {useFetchQuery} from "../hooks/useFetchQuery"; 
import UserPosition from "../features/userPosition";

const  Index = ()=> {
  const [geolocation,setGeoLocation] = React.useState(undefined)
  const {isLoading,data} = useFetchQuery("user","http://localhost:8080/api/profile/")    
  const defaultOptions = {
    fullscreenControl: false,
  } 
 React.useEffect(()=>{
    
    navigator.geolocation.getCurrentPosition((position)=>{
      if(!isLoading && data.user.longitude!==position.coords.longitude&&data.user.latitude!==position.coords.latitude ){
          if(data.user.longitude||data.user.latitude){
            return setGeoLocation({
             longitude:data.user.longitude,
             latitude:data.user.latitude
           })
          }
      }
        return  setGeoLocation({
           longitude:position.coords.longitude,
           latitude:position.coords.latitude
         })

    })
    return ()=>setGeoLocation(undefined)
  },[isLoading,data])

    if(!isLoading && geolocation ===undefined){
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
            bootstrapURLKeys={{ key: "AIzaSyATBu4y1OPMu1ctdhBFvBy3L1XecgDyG1k" }}
            defaultCenter={{lat:geolocation.latitude,lng:geolocation.longitude}}
            defaultZoom={14}
            options={defaultOptions} 
          >
            <UserPosition
              lat={geolocation.latitude}
              lng={geolocation.longitude}
              userName={data.user.userName}
              profileImg={data.user.profileImg}
              isProfile={false}
            />
          </GoogleMapReact>
        </div>
        </Layout>
     )
     
    )
  
}

export default Index;