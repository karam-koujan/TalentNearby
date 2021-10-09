import RatingStars from "../../common/components/ratingStars/";
import Reviews from "./reviews";
import { useFetchQuery } from "../../../hooks/useFetchQuery";
import {ProfileImgWrapper,Wrapper} from "../templates/layout";
import {ReviewersNum, UserName} from "../templates/text";
import { Discription,DescriptionList,DescriptionTitle } from "../templates/list";
import {Icon} from "../templates/icons";


const Profile = ({_id})=>{
  const {isLoading,data} = useFetchQuery(["users",_id],`http://localhost:8080/api/profile/${_id}`) 
  return(
    <Wrapper>
      {isLoading?"isLoading":(
        <>
        <ProfileImgWrapper profileImg={data.user.profileImg}>
          {data.user.profileImg?<img loading="lazy" src={data.user.profileImg}  alt="profile image"/>:null}
        </ProfileImgWrapper>
        <UserName>
         {data.user.userName}
         </UserName>
         <RatingStars rating={data.user.rating} margin="0 auto"/>
         <ReviewersNum>{data.user.reviewersNum} reviews</ReviewersNum>
         <DescriptionList>
           <DescriptionTitle>
             job
           </DescriptionTitle>
           <Discription>
             {data.user.job}
           </Discription>
           <DescriptionTitle>
             Phone
           </DescriptionTitle>
           <Discription>
            <Icon className="fa fa-phone"></Icon>
            {data.user.phone}
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
         <Reviews profileId={data.user._id}/>

        </>
      )}
    </Wrapper>
  )
}
export default Profile