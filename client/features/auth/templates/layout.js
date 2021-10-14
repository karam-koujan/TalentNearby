import styled,{css} from "styled-components";
import {media} from "../../../styles/media";

const Header = styled.header`
padding:2rem 3rem;
&>span{
  color:${props=>props.theme.secondary};
  font-size:25px;
}
`

const IntroSection = styled.section`
 align-items:center;
 background-color:${props=>props.theme.primary};
 display:flex;
 flex-direction:column;
 width:40%;
 z-index:0;
 @media(max-width:${media.small}){
   display:none;
 } 
`

const FormSection = styled.section`
 align-items:center;
 background-color:${props=>props.secondary};
 display:flex;
 flex-direction:column;
 width:60%;
 @media(max-width:${media.small}){
  width:100%;
}
`

const FlexWrapper = styled.main`
 bottom:0;
 display:flex;
 width:100%;
 position:absolute;
 top:0;
 @media(max-width:${media.small}){
  display:block;
}
`

const Wrapper = styled.div`
  margin:var(--margin);
  width:var(--width);
  @media(max-width:${media.small}){
    padding:0 1rem;
    width:100%;
  }
`
const InputWrapper = styled.div`
  margin:0 0 1rem 0;
`

 const Model = styled.div`
  background-color:${props=>props.theme.secondary};
  display:block; 
  left:67%;
  position:absolute;
  opacity:0;
  width:350px;
  top:36%;
  z-index:-1;
  transition:all .3s ease-in;
  ${({condition})=>condition?css`
  opacity:1;
  top:35%;
  transition:all .3s ease-in;
  z-index:1;
  `:null
  }

  & p{
    color:${props=>props.theme.third};

    cursor:pointer;
    margin:0;
    padding:1.5rem 1rem;

    &:hover,&:focus{
      background-color:#dbdbdb;
    }
  }

` 

export {
  Header,
  IntroSection,
  FormSection,
  FlexWrapper,
  Wrapper,
  InputWrapper,
  Model
}
