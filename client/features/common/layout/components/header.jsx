import {Header as Wrapper } from "../templates/layout";
import Avatar from "../../components/avatar/";
import Styles from "../styles/styles.module.css"

const Header = ({data})=>{
    return(
       <Wrapper>
           <Avatar className={Styles.avatarPosition} userName={data.userName} profileImg={data.profileImg} size="45px"/>
       </Wrapper>
    )
}
export default Header;