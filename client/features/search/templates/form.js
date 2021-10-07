import styled from "styled-components";




export const Form = styled.form`
  background-color:white;
  border-radius:6px;
  display:flex;
  justify-content:space-between;
  max-width:367px;
  position:relative;
  width:80%;
`

export const SearchInput = styled.input`
 background-color:rgba(0,0,0,.1);
 border:none;
 border-bottom-left-radius:6px;
 border-top-left-radius:6px;
 color:${props=>props.theme.third};
 padding:.5rem 1.4rem .5rem .5rem;
 width:89%;
 &:focus{
   background:transparent;
   border:2px solid ${props=>props.theme.primary};
   outline:none;
 }
 &::placeholder{
    color:grey;
 }
`

export const SearchBtn = styled.button`
 background-color:${props=>props.theme.primary};
 border-bottom-right-radius:6px;
 border-top-right-radius:6px;
 display:block;
 padding:.5rem 0 ;
 width:13%;

 &:hover,&:focus{
     opacity:.8;
 }
`