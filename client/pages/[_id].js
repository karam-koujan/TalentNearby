import * as React from "react";
import { useRouter } from "next/router";
import {useFetchQuery} from "../hooks/useFetchQuery";
import GoogleMapReact from 'google-map-react';
import UserMarker from "../features/userMarker/components/userMarker";
import Layout from "../features/common/layout/components/";

const Index =()=>{
 const {query:{_id}} = useRouter();
 const options = {fullscreenControl: false ,disableDoubleClickZoom:true,clickableIcons: false};
 const [newGeolocation,setNewGeoLocation] = React.useState(undefined);
 const [disableMapClick,setDisableMapClick] = React.useState(false);
 const [showNewUserPositionCard,setShowNewUserPositionCard] = React.useState(false);
 const {isLoading,data} = useFetchQuery(["users",_id],`http://localhost:8080/api/profile/${_id}`)  
 const profile = useFetchQuery("user","http://localhost:8080/api/profile/");    
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
return !isLoading&&!profile.isLoading?(
   <Layout data={profile.data.user}>
     <div style={{ height: '100vh', width: '100%' }}>   
     <GoogleMapReact
       bootstrapURLKeys={{ key:"AIzaSyATBu4y1OPMu1ctdhBFvBy3L1XecgDyG1k"  }}
       defaultCenter={{lat:data.user.latitude,lng:data.user.longitude}}
       defaultZoom={17}
       options={options} 
       onClick={handleClick}     
       yesIWantToUseGoogleMapApiInternals 
     > 
          <UserMarker  
            key={_id}
           handleCloseCard={handleCloseCard}
           onMouseEnter={handleOnChildEnter} 
           onMouseLeave={handleOnChildLeave} 
           lat={data.user.latitude}
           lng={data.user.longitude}
           _id={_id}
           />
    </GoogleMapReact>
   </div>
   </Layout> 
 ):"isLoading"
  
}


export default Index