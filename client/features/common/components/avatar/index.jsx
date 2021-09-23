import  {DefaultAvatar,Avatar as ProfileImg,UserName} from "./style";

const Avatar = ({userName,profileImg,size,className})=>{

     return(
       profileImg?(
            <ProfileImg size={size} className={className}>
                 <img src={profileImg}/>
          </ProfileImg>
          ):(
      <DefaultAvatar size={size} className={className}>
           <UserName>
                {userName[0]}
           </UserName>
      </DefaultAvatar>
       )

  )
}


export default Avatar ;