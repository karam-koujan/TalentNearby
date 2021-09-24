import * as React from "react";
import Marker from "../common/components/marker";
import Avatar from "../common/components/avatar";
import Styles from "./styles.module.css";
import  ProfileInfoCard from "../profile/components/profileInfoCard";
const UserPosition = ({userName,profileImg,isProfile})=>{
    const [showProfileInfo,setShowProfileInfo] = React.useState(false);
    return(
        <div className={Styles.container}>
            {showProfileInfo?<ProfileInfoCard userName={userName} profileImg={profileImg}/>:null}
            <Marker color={!isProfile?"green":"red"} handleShow={()=>setShowProfileInfo(true)} handleHide={()=>setShowProfileInfo(false)}/>
            <Avatar profileImg={profileImg} size="20px" className={Styles.avatar} userName={userName}/>
        </div>
    )
}
export default UserPosition;