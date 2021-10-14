import styled from "styled-components";
import {media} from "../../../styles/media";



const MainHeading = styled.h1`
 color:${props=>props.theme.primary};
 font-size:clamp(1.3rem,2.5rem,3vw);
 font-weight:bold;
 letter-spacing:1px;
 margin:0 0 3rem 0;
 text-align:center;
 text-transform:capitalize;
 @media(max-width:${media.small}){
  width:100%;
}
 
`

const SecondaryHeading = styled.h2`
  color:${props=>props.theme.secondary};
  font-size:clamp(1rem,2.4rem,3vw);
  font-weight:bold;
  letter-spacing:1.5px;
  margin:0 0 2rem 0;
  text-transform:capitalize;
  @media(max-width:${media.small}){
    margin:0;
  }
`


export {
    MainHeading,
    SecondaryHeading
}