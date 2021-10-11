import * as React from "react";
import { useRouter } from "next/router";
import {Box, Header as Wrapper } from "../templates/layout";
import { BoxElement } from "../templates/text";
import Avatar from "../../components/avatar/";
import Search from "../../../search/components";
const Header = ({data})=>{
    const router = useRouter()
    const [showBox,setShowBox] = React.useState(false)
    const handleLogout = ()=>{
        localStorage.removeItem('token')
        router.push("/auth/signin")
    } 
    return(
       <Wrapper>
           <Search/>
           <Avatar onClick={()=>setShowBox(!showBox)} userName={data.userName} profileImg={data.profileImg} size="45px"/>
           {showBox?(
           <Box>
           <BoxElement onClick={()=>router.replace(`/?id=${data._id}`,undefined,{shallow:true})}>
                go to profile
               </BoxElement>
               <BoxElement onClick={()=>router.reload()}>
                   back to position
               </BoxElement>
               <BoxElement onClick={handleLogout}>
                   Logout
               </BoxElement>
           </Box>):null
            }
       </Wrapper>
    )
}
export default Header;