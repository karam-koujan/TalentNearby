import styled from "styled-components";

export const Input=styled.input`
  border:2px solid ${props=>props.theme.primary};
  border-radius:3px;
  color:${props=>props.theme.third};
  padding:.5rem;
  margin:0 0 .5rem 0;
  width:100%;
  &::placeholder{
     color:${props=>props.theme.third};
  }
  &:hover,&:focus{
     outline:none;
 }
`
export const Button = styled.a`
  background-color:${props=>props.theme.primary};
  color:${props=>props.theme.secondary};
  display:block;
  font-size:.8rem;
  letter-spacing:1px;
  margin:1rem auto 0 auto;
  padding:.4rem 1rem;
  text-align:center;
  text-decoration:none;
  text-transform:uppercase;
  transition:opacity .5s ease-in-out;
  &:hover,&:focus{
   opacity:.9;
  }
`

export const Label = styled.label`
 color:${props=>props.theme.primary};
 display:block;
 font-size:.7rem;
 margin:0 0 .5rem 0;
 text-transform:uppercase;
`