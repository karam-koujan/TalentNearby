import * as React from "react";
import { Waypoint } from "react-waypoint";
import Avatar from "../../common/components/avatar/";
import RatingStars from "../../common/components/ratingStars/";
import Styles from "../styles/styles.module.css";
import {ReviewsWrapper, ReviewWrapper} from "../templates/layout";
import { ReviewTitle,ReviewerName, ReviewerText, NoReviews} from "../templates/text";
import {useFetchInfiniteQuery} from "../../../hooks/useFetchInfiniteQuery";

const Reviews = ({profileId})=>{
    const {data,status,fetchMore,isFetchingNextPage,hasNextPage} = useFetchInfiniteQuery(["reviews",profileId],`http://localhost:8080/api/profile/reviews/${profileId}`,2)

    return(
        <>
        <ReviewTitle>reviews</ReviewTitle>
        <ReviewsWrapper id="reviews">
        {status==="loading"?"...isLoading":data.pages.map((page,currentPageIdx)=>(
          <React.Fragment key={currentPageIdx}>
            {page.reviews.length?page.reviews.map(({text,rating,reviewer:{userName,profileImg}},currentReview)=>(
          <React.Fragment key={currentReview}>
          <ReviewWrapper >
             <div className={Styles.flex}>
               <Avatar userName={userName} profileImg={profileImg} size="40px"/>
             <div className={Styles.userNameRating}>
         <ReviewerName>{userName}</ReviewerName>
         <RatingStars rating={rating} size=".8rem"/>
             </div>
             </div>
             <ReviewerText>
                       {text}
             </ReviewerText>
          </ReviewWrapper>
          {currentReview === page.reviews.length -2 && hasNextPage ? <Waypoint onEnter={()=>fetchMore()}/>:null}
          </React.Fragment>
          )):<NoReviews>No Reviews</NoReviews>}
             </React.Fragment>            
            
       ))}
      </ReviewsWrapper>
      
    </>
    )
}
export default Reviews ;