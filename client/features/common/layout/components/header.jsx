import {Header as Wrapper } from "../templates/layout";
import Avatar from "../../components/avatar/";
import Search from "../../../search/components";
const Header = ({data})=>{
    return(
       <Wrapper>
           <p>Logo</p>
           <Search/>
           <Avatar  userName={data.userName} profileImg={data.profileImg} size="45px"/>
           
       </Wrapper>
    )
}
export default Header;