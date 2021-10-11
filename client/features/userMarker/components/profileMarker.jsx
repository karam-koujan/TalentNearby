import * as React from "react";
import Marker from "../../common/components/marker";
import Styles from "../styles/styles.module.css";
import  ProfileCard from "../../userInfo/components/profileInfo/profileCard";
import { useRouter } from "next/router";
const ProfileMarker = ({data,handleCloseCard,onMouseEnter,onMouseLeave})=>{
    const [showUserCard,setShowUserCard] = React.useState(false)
   const router = useRouter()
    return(
        <div className={Styles.container} >
            {showUserCard?<ProfileCard handleCloseCard={handleCloseCard(showUserCard,setShowUserCard)} data={data} className={Styles.cardWrapper}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  />:null}
        <Marker color="red" onClick={()=>router.push(`/?id=${data._id}`,undefined,{shallow:true})}/>
        </div>
    )
}
export default ProfileMarker;