import * as React from "react";
import Styles from "../../styles/styles.module.css";
import {AvatarBox} from "../../templates/layout";
import { BoxElement} from "../../templates/text";
import {useRouter} from "next/router";



const OptionsBox = ({showBox,data})=>{
    const router = useRouter()
    const handleLogout = ()=>{
        localStorage.removeItem('token')
        router.push("/auth/signin")
    } 
    return(
        showBox?(
            <AvatarBox>
            <BoxElement  onClick={()=>router.replace(`/?id=${data._id}`,undefined,{shallow:true})}>
                 go to profile
                </BoxElement>
                <BoxElement >
                   <a href="/" className={Styles.link }> back to position</a>
                </BoxElement>
                <BoxElement onClick={handleLogout}>
                    Logout
                </BoxElement>
            </AvatarBox>):null
             
    )
}

export default OptionsBox;