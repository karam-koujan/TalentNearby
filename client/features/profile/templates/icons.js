import styled from "styled-components";




export const Icon = styled.span`
 margin:0 .2rem 0 0;
`
export const Pencil = styled.span`
  color:${props=>props.theme.third};
  cursor:pointer;
  margin:.5rem 0 0 .4rem;
`
export const Close =styled.span`
 color:${props=>props.theme.third};
 cursor:pointer;
`

export const ChangeProfileImgIcon = styled.span`
 align-items:center;
 background-color:${props=>props.theme.third};
 border-radius:50%;
 color:${props=>props.theme.secondary};
 display:flex;
 justify-content:center;
 font-size:1.5rem;
 height:40px;
 width:40px;

 &:hover,&:focus{
   opacity:.7;
 }
`