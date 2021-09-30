import * as React from "react";
import Marker from "../../common/components/marker";
import Styles from "../styles/styles.module.css";
import  ProfileCard from "../../userInfo/components/profileInfo/profileCard";
const ProfileMarker = ({data,handleCloseCard,onMouseEnter,onMouseLeave})=>{
    const [showUserCard,setShowUserCard] = React.useState(false)
 
    return(
        <div className={Styles.container} >
            {showUserCard?<ProfileCard handleCloseCard={handleCloseCard(showUserCard,setShowUserCard)} data={data} className={Styles.cardWrapper}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  />:null}
        <Marker color="red" onClick={()=>setShowUserCard(!showUserCard)}/>
        </div>
    )
}
export default ProfileMarker;