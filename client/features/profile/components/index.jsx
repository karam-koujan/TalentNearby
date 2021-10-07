import RatingStars from "../../common/components/ratingStars/";
import Avatar from "../../common/components/avatar/";
import Styles from "../styles/styles.module.css";
import { useFetchQuery } from "../../../hooks/useFetchQuery";
import {ProfileImgWrapper, ReviewsWrapper, ReviewWrapper, Wrapper} from "../templates/layout";
import { ReviewTitle, UserName,ReviewerName, ReviewerText} from "../templates/text";
import { Discription,DescriptionList,DescriptionTitle } from "../templates/list";
import {Icon} from "../templates/icons";


const Profile = ({_id})=>{
  const {isLoading,data} = useFetchQuery(["users",_id],`http://localhost:8080/api/profile/${_id}`) 
  return(
    <Wrapper>
      {false?"isLoading":(
        <>
        <ProfileImgWrapper>
          <img src="https://picsum.photos/id/237/536/354" alt="profile image"/>
        </ProfileImgWrapper>
        
        <UserName>
         karam 
         </UserName>
         <RatingStars rating="5"/>
         <DescriptionList>
           <DescriptionTitle>
             Job
           </DescriptionTitle>
           <Discription>
             developer
           </Discription>
           <DescriptionTitle>
             Phone
           </DescriptionTitle>
           <Discription>
            <Icon className="fa fa-phone"></Icon>
            0605407251
           </Discription>
           <DescriptionTitle>
             Email
           </DescriptionTitle>
           <Discription>
            <Icon className="fa fa-envelope"></Icon>
            karamkaku@gmail.com
           </Discription>
           <DescriptionTitle>
            bio
           </DescriptionTitle>
           <Discription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id reiciendis itaque dicta aliquam amet est, mollitia accusantium explicabo quidem sunt ipsam nobis alias eius. Error quas voluptates eaque voluptas consequuntur?
           </Discription>
         </DescriptionList>
         <ReviewTitle>reviews</ReviewTitle>
         <ReviewsWrapper>
           <ReviewWrapper>
              <div className={Styles.flex}>
                <Avatar userName="k" size="40px"/>
              <div className={Styles.userNameRating}>
          <ReviewerName>Karam</ReviewerName>
          <RatingStars rating={2} size=".8rem"/>
              </div>
              </div>
              <ReviewerText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae harum commodi, similique labore ullam debitis exercitationem, laudantium consectetur dolorum praesentium quibusdam facilis voluptatum voluptates. Perspiciatis nihil reprehenderit similique quas voluptatibus.
              </ReviewerText>
           </ReviewWrapper>
           <ReviewWrapper>
              <div className={Styles.flex}>
                <Avatar userName="k" size="40px"/>
              <div className={Styles.userNameRating}>
          <ReviewerName>Karam</ReviewerName>
          <RatingStars rating={2} size=".8rem"/>
              </div>
              </div>
              <ReviewerText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae harum commodi, similique labore ullam debitis exercitationem, laudantium consectetur dolorum praesentium quibusdam facilis voluptatum voluptates. Perspiciatis nihil reprehenderit similique quas voluptatibus.
              </ReviewerText>
           </ReviewWrapper>
         </ReviewsWrapper>
        </>
      )}
    </Wrapper>
  )
}
export default Profile