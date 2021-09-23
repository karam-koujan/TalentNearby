import Marker from "../common/components/marker";
import Avatar from "../common/components/avatar";
import Styles from "./styles.module.css";
const UserPosition = ({userName,profileImg,isProfile})=>{
    return(
        <div className={Styles.container}>
        <Marker color={!isProfile?"green":"red"}/>
        <Avatar profileImg={profileImg} className={Styles.avatar} size="23px" userName={userName}/>
        </div>
    )
}
export default UserPosition;