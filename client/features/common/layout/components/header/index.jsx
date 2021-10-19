import * as React from "react";
import Avatar from "../../../components/avatar";
import Search from "../../../../search/components";
import filter from "../../../../../assets/icons/filter.svg"
import {Header as Wrapper ,AvatarFilterWrapper,FilterWrapper} from "../../templates/layout";
import OptionsBox from "./optionsBox";
import FilterBox from "./filterBox";

const Header = ({data})=>{
    const [showBox,setShowBox] = React.useState(false)
    const [showFilterBox,setShowFilterBox] = React.useState(false)
   
  
   const handleShowBox = ()=>{
       setShowBox(!showBox)
       setShowFilterBox(false)
   }
   const handleShowFilterBox = ()=>{
       setShowFilterBox(!showFilterBox)
       setShowBox(false)
   }
  
    return(
       <Wrapper>
           <Search/>
           <AvatarFilterWrapper>
           <Avatar onClick={handleShowBox} userName={data.userName} profileImg={data.profileImg} size="45px"/>
           <OptionsBox showBox={showBox} data={data}/>
             <FilterWrapper onClick={handleShowFilterBox}>
                <img src={filter.src} alt="filter icon"/>
            </FilterWrapper>
             <FilterBox showFilterBox={showFilterBox}/> 
           </AvatarFilterWrapper>
       </Wrapper>
    )
}
export default Header;