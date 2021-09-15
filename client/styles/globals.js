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
  third:"rgb(25, 24, 71)",
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