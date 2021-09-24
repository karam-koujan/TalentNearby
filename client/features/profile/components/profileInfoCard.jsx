import Avatar from "../../common/components/avatar";
import Styles from "../styles/styles.module.css"
import {Wrapper} from "../templates/layout";
import {UserName} from "../templates/text";
const ProfileInfoCard = ({userName,profileImg})=>{
   return(
         <Wrapper>
         <Avatar profileImg={profileImg} size="60px" className={Styles.avatar}/>
         <UserName>
             {userName}
         </UserName>
         </Wrapper>
   )
}

export default ProfileInfoCard