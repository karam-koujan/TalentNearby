import * as React from "react";
import Marker from "../../common/components/marker";
import Styles from "../styles/styles.module.css";
import { useRouter } from "next/router";
const ProfileMarker = ({data})=>{
   const router = useRouter()
    return(
        <div className={Styles.container} >
        <Marker color="red" onClick={()=>router.push(`/?id=${data._id}`,undefined,{shallow:true})}/>
        </div>
    )
}
export default ProfileMarker;