import * as React from "react";
import Marker from "../../common/components/marker";
import Styles from "../styles/styles.module.css";
import  UserCard from "../../userInfo/components/userInfo/userCard";
import { useRouter } from "next/router";
const UserMarker = ({_id,handleCloseCard,onMouseEnter,profile,onMouseLeave,...props})=>{
    const [showUserCard,setShowUserCard] = React.useState(false)
    const router  = useRouter()
    return(
        <div className={Styles.container} {...props} >
            {showUserCard?<UserCard _id={_id} profile={profile}  className={Styles.cardWrapper} handleCloseCard={handleCloseCard(showUserCard,setShowUserCard)}   onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  />:null}
        <Marker color="green" onClick={()=>router.push(`/?id=${_id}`,undefined,{shallow:true})}/>
        </div>

    )
}
export default UserMarker;

