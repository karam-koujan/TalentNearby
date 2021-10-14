import RateUser from "./rateUser";
import {Wrapper,Star} from "./styles";

const RatingStars = ({rating,enableRating,handleRate,tooltip,handleClick,size,margin,...props})=>{
        return(enableRating?<RateUser margin={margin} handleRate={handleRate} {...props}/>:
     <Wrapper onClick={handleClick} style={{'--margin':margin}} className="tooltip" {...props}>

         <Star className="fa fa-star" checked={1<=rating} size={size}/>
         <Star className="fa fa-star"  checked={2<=rating} size={size}/>
         <Star className="fa fa-star"  checked={3<=rating} size={size}/>
         <Star className="fa fa-star"  checked={4<=rating} size={size}/>
         <Star className="fa fa-star"  checked={5<=rating} size={size}/>
         {tooltip?<span className="tooltiptext">{tooltip}</span>:null}

     </Wrapper>
        )
}

export default RatingStars;