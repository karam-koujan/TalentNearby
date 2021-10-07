import RateUser from "./rateUser";
import {Wrapper,Star} from "./styles";

const RatingStars = ({rating,enableRating,handleRate,handleClick,size,...props})=>{
        return(enableRating?<RateUser handleRate={handleRate}/>:
     <Wrapper onClick={handleClick}>
         <Star className="fa fa-star" checked={1<=rating} size={size}/>
         <Star className="fa fa-star"  checked={2<=rating} size={size}/>
         <Star className="fa fa-star"  checked={3<=rating} size={size}/>
         <Star className="fa fa-star"  checked={4<=rating} size={size}/>
         <Star className="fa fa-star"  checked={5<=rating} size={size}/>
     </Wrapper>
        )
}

export default RatingStars;