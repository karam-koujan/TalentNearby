import styled from "styled-components";



export const Header = styled.header`
 background-color:red;
 position:absolute;
 width:100%;
 z-index:10000;
`

export const Aside = styled.aside`
  background-color:${({theme,isEmailSent})=>isEmailSent?theme.third:theme.primary};
 

`


