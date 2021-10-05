
import {SearchBoardWrapper, UserWrapper} from "../templates/layout";
import { UserName } from "../templates/text";
import Avatar from "../../common/components/avatar";
import RatingStars from "../../common/components/ratingStars";


const SearchBoard = ()=>{
      return(
        <SearchBoardWrapper>
            
            <UserWrapper>
            <Avatar userName="Karam" size="45px"/>
            <div>
                <UserName>
                    karam koujan
                </UserName>
            <RatingStars/>
            </div>
            </UserWrapper>
              
            <UserWrapper>
            <Avatar userName="Karam" size="45px"/>
            <div>
                <UserName>
                    karam koujan
                </UserName>
            <RatingStars rating={5}/>
            </div>
            </UserWrapper>
        </SearchBoardWrapper>
      )
}

export default SearchBoard;