import * as React from "react";
import {Wrapper,Star} from "./styles";






const RateUser = ({handleRate,margin,...props})=>{
 const [rating,setRating] = React.useState(0)
 const [isClicked,setIsClicked] = React.useState(false)
 const handleHover = (id)=> setRating(id)
 const handleClick  = ()=>{
    setIsClicked(true)
    setRating(rating)
    handleRate(rating)
 }
 const handleOnLeave = ()=>{
    if(!isClicked){
          setRating(0)
    }
  }
 
    return(
    <Wrapper {...props} style={{'--margin':margin}} onClick={handleClick}  onMouseLeave={handleOnLeave}>
    
         <Star className="fa fa-star"  onMouseEnter={()=>handleHover(1)} checked={1<=rating}/>
         <Star className="fa fa-star" onMouseEnter={()=>handleHover(2)}  checked={2<=rating}/>
         <Star className="fa fa-star"  onMouseEnter={()=>handleHover(3)}   checked={3<=rating}/>
         <Star className="fa fa-star" onMouseEnter={()=>handleHover(4)}   checked={4<=rating}/>
         <Star className="fa fa-star" onMouseEnter={()=>handleHover(5)}   checked={5<=rating}/>
    </Wrapper>
 )
}


export default RateUser;