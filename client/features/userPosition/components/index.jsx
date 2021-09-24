import * as React from "react";
import Marker from "../../common/components/marker";
import Styles from "../styles/styles.module.css";
import  UserCard from "./userCard";
const UserPosition = ({userName,profileImg,isProfile,onMouseEnter,onMouseLeave})=>{
  const [showUserCard,setShowUserCard] = React.useState(false)
    return(
        <div className={Styles.container} >
            {showUserCard?<UserCard className={Styles.cardWrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  userName={userName}  profileImg={profileImg}/>:null }
            <Marker color={!isProfile?"green":"red"} onClick={()=>setShowUserCard(!showUserCard)}/>
        </div>
    )
}
export default UserPosition;