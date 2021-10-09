import * as React from "react";
import Marker from "../../common/components/marker";
import Styles from "../styles/styles.module.css";
import  UserCard from "../../userInfo/components/userInfo/userCard";
const UserMarker = ({_id,handleCloseCard,onMouseEnter,profile,onMouseLeave,...props})=>{
    const [showUserCard,setShowUserCard] = React.useState(false)
    return(
        <div className={Styles.container} {...props} >
            {showUserCard?<UserCard _id={_id} profile={profile}  className={Styles.cardWrapper} handleCloseCard={handleCloseCard(showUserCard,setShowUserCard)}   onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  />:null}
        <Marker color="green" onClick={()=>setShowUserCard(!showUserCard)}/>
        </div>

    )
}
export default UserMarker;

