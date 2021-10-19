import styled , {css} from "styled-components";
import {media} from "../../../styles/media"


export const IntroText = styled.p`
 color:${props=>props.theme.secondary};
 font-size:clamp(.5rem,1.1rem,2vw);
 letter-spacing:1px;
 line-height:clamp(1.5rem,2.5rem,4vw);
 margin:0;
 width:90%;
 &::first-letter{
     text-transform:capitalize;
 } 
`

export const FormText = css`
 color:${props=>props.theme.third}
`
export const CheckBoxTitle = styled.p`
${FormText}
`
export const ForgotPass = styled.a`
display:block;
margin:0 auto;
text-decoration:none;
&:hover,&:focus{
    text-decoration:underline;
}
${FormText}
`      

export const Warning = styled.p`
  color :red;
  font-size:15px;
  line-height:20px;
`

export const Err = styled.p`
color:red;
`
export const InputErr = styled(Err)`
  margin:0;
 `
 export const ServerErr = styled(Err)`
 text-align:center;

 `
 export const ResponseSucceed = styled.p`
  color:${props=>props.theme.primary} 
  text-align:center;
  ` 

export const Text = styled.p`
 color:${props=>props.theme.third};
 display:none;
 @media(max-width:${media.small}){
   display:block;
 }
`

export const LinkText = styled.a`
color:${props=>props.theme.primary};
margin:0 0 0 .2rem; 
text-decoration:none;
&:hover,&:focus{
  text-decoration:underline;
}
`