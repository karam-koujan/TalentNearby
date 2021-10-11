import RatingStars from "../../common/components/ratingStars";
import Reviews from "./reviews";
import { useFetchQuery } from "../../../hooks/useFetchQuery";
import {ProfileImgWrapper,Wrapper} from "../templates/layout";
import {ReviewersNum, UserName} from "../templates/text";
import { Discription,DescriptionList,DescriptionTitle } from "../templates/list";
import {Icon} from "../templates/icons";
import { useRouter } from "next/router";


const Profile = ({_id,profileId})=>{
  const {isLoading,data} = useFetchQuery(["users",_id],`http://localhost:8080/api/profile/${_id}`) 
  const router = useRouter()  
  return(
    <Wrapper>
      {isLoading?null:(
        <>
        <ProfileImgWrapper profileImg={data.user.profileImg}>
          {data.user.profileImg?<img loading="lazy" src={data.user.profileImg}  alt={`${data.user.userName} image`}/>:null}
        </ProfileImgWrapper>
        <UserName>
         {data.user.userName}
         </UserName>
         {data.user.status==="talent"?(
               <>
            <RatingStars tooltip={`rate ${data.user.userName}`} rating={data.user.rating} style={{'cursor':'pointer','margin':'0 auto'}}   onClick={profileId!==_id?()=>router.push(`/?talentId=${_id}&userName=${data.user.userName}`,undefined,{shallow:true}):null}/>
               <ReviewersNum href="#reviews">{data.user.reviewersNum} reviews</ReviewersNum>
               </>
         ):null}
         <DescriptionList>
         {data.user.status==="talent"?(
           <>
           <DescriptionTitle>
             job
           </DescriptionTitle>
           <Discription>
             {data.user.job}
           </Discription>
           </>
         ):null}
       <DescriptionTitle>
             Phone
           </DescriptionTitle>
           <Discription>
            <Icon className="fa fa-phone"></Icon>
            {data.user.phoneNumber}
           </Discription>
           <DescriptionTitle>
             Email
           </DescriptionTitle>
           <Discription>
            <Icon className="fa fa-envelope"></Icon>
            {data.user.email}
           </Discription>
           <DescriptionTitle>
            bio
           </DescriptionTitle>
           <Discription>
            {data.user.bio}
           </Discription>
         </DescriptionList>
         {data.user.status==="talent"?<Reviews profileId={data.user._id}/>:null}

        </>
      )}
    </Wrapper>
  )
}
export default Profile