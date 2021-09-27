import {createGlobalStyle} from "styled-components";



const GlobalStyle = createGlobalStyle`
 *,*::before,*::after{
   box-sizing:border-box;
 }
 
 body{
   margin:0;
   padding:0;
   font-family: 'Work Sans', sans-serif;

  }
 button{
   border:none;
   background:none;
   cursor:pointer;
   outline:none;
 }
 img{
   height:auto;
   width:100%;
 }
 a{
   cursor:pointer;
 }
 p{
   color:#090117;
 }
`

const lightTheme = {
  primary:"#19BD33",
  secondary:"#ffffff",
  third:"#4b6cc1",
  lightGrey:"#f0efef"
}
const darkTheme = {
  primary:"#19BD33",
  secondary:"#ffffff",
  third:"#3d3d3d",
  lightGrey:"#f0efef"
}

export {
  GlobalStyle,
  darkTheme,
  lightTheme
}