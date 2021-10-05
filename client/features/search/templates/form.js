import styled from "styled-components";




export const Form = styled.form`
  display:flex;
  max-width:300px;
  position:relative;
  width:80%;
`

export const SearchInput = styled.input`
 border:2px solid ${props=>props.theme.primary};
 border-left:none;
 border-radius:3px;
 border-bottom-left-radius:0px;
 border-top-left-radius:0px;
 color:${props=>props.theme.third};
 padding:.8rem 1.4rem .8rem .5rem;
 width:85%;
 &:focus{
     outline:none;
 }
 &::placeholder{
    color:${props=>props.theme.primary};
 }
`

export const SearchBtn = styled.button`
 background-color:${props=>props.theme.primary};
 border:2px solid ${props=>props.theme.primary};
 border-radius:3px;
 border-bottom-right-radius:0px;
 border-top-right-radius:0px;

 display:block;
 padding:.5rem 0 ;
 width:15%;

 &:hover,&:focus{
     opacity:.8;
 }
`