import styled from "styled-components";



export const Header = styled.header`
  align-items:center;
  display:flex;
  justify-content:space-between;
  left:0;
  padding:.5rem 1rem;
  position:absolute;
  right:0;
  width:100%;
  z-index:10000;
`


export const Aside = styled.aside`
  background-color:${({theme,isEmailSent})=>isEmailSent?theme.third:theme.primary};
`


