import {useRouter} from "next/router";
import {UserWrapper} from "../templates/layout";
import { UserName } from "../templates/text";
import Avatar from "../../common/components/avatar";
import RatingStars from "../../common/components/ratingStars";

const SearchBoard = ({userName,profileImg,rating,_id})=>{
      const router = useRouter();
      const handleClick= ()=>{
          router.push(`/${_id}`)
      }
      return(
            
            <UserWrapper onClick={handleClick}>
            <Avatar profileImg={profileImg} userName={userName} size="45px"/>
            <div>
                <UserName>
                    {userName}
                </UserName>
         <RatingStars rating={rating}/>
            </div>
            </UserWrapper>
      )
}

export default SearchBoard;