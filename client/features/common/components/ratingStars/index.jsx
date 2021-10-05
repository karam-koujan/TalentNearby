import RateUser from "./rateUser";
import {Wrapper,Star} from "./styles";

const RatingStars = ({rating,enableRating,handleRate,handleClick,...props})=>{
        return(enableRating?<RateUser handleRate={handleRate}/>:
     <Wrapper onClick={handleClick}>
         <Star className="fa fa-star" checked={1<=rating}/>
         <Star className="fa fa-star"  checked={2<=rating}/>
         <Star className="fa fa-star"  checked={3<=rating}/>
         <Star className="fa fa-star"  checked={4<=rating}/>
         <Star className="fa fa-star"  checked={5<=rating}/>
     </Wrapper>
        )
}

export default RatingStars;