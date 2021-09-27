import styled from "styled-components";

export const Icon = styled.span`
 font-size:16px;
`
export const PhoneIcon = styled(Icon)`
  margin:0 .2rem 0 0;
`


export const Pencil = styled(Icon)`
  margin-top:0rem;
`

export const Close = styled.span`
 color:${props=>props.theme.third};
 font-size:16px;
 padding:.5rem .8rem;
 position:absolute;
 right:0%;
 top:0%;
 transition:background-color .4s ease-in-out , color .4s ease-in-out;
 &:hover,&:focus{
   background-color:#FF7F7F;
   color:white;
 }
`