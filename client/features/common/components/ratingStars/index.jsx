import {Wrapper,Star} from "./styles";

const RatingStars = ({rating})=>{
        return(
     <Wrapper>
         <Star className="fa fa-star" checked={1<=rating}/>
         <Star className="fa fa-star"  checked={2<=rating}/>
         <Star className="fa fa-star"  checked={3<=rating}/>
         <Star className="fa fa-star"  checked={4<=rating}/>
         <Star className="fa fa-star"  checked={5<=rating}/>
     </Wrapper>
        )
}

export default RatingStars;