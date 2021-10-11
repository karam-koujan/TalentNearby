import styled from "styled-components";



export const Header = styled.header`
  align-items:center;
  display:flex;
  justify-content:space-between;
  left:0;
  padding:1rem ;
  position:absolute;
  visibility:none;
  right:0;
  width:100%;
  z-index:10000;
`


export const Aside = styled.aside`
  background-color:${({theme,isEmailSent})=>isEmailSent?theme.third:theme.primary};
`
export const Box =styled.div`
 background-color:${props=>props.theme.secondary};
 max-width:200px;
 position:absolute;
 right:1rem;
 width:80%;
 
 animation-name:fade-in;
 animation-duration:.3s;
 animation-fill-mode:forwards;
 animation-timing-function:ease-in;
 @keyframes fade-in{
   from{
    opacity:0;
    top:90%;
   }
   to{
     opacity:1;
     top:100%;
   }
 }
`


