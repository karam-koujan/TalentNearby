import  {DefaultAvatar,Avatar as ProfileImg,UserName} from "./style";

const Avatar = ({userName,profileImg,size,className,...props})=>{

     return(
       profileImg?(
            <ProfileImg size={size} className={className} {...props}>
                 <img src={profileImg}/>
          </ProfileImg>
          ):(
      <DefaultAvatar size={size} className={className} {...props}>
           <UserName>
                {userName[0]}
           </UserName>
      </DefaultAvatar>
       )

  )
}


export default Avatar ;