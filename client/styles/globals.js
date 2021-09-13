import {createGlobalStyle,ThemeProvider} from "styled-components";



const GlobalStyle = createGlobalStyle`
 *,*::before,*::after{
   box-sizing:border-box;
 }
 
 body{
   margin:0;
   padding:0;
   font-family:Roboto;
 }
`

const lightTheme = {
  primary:"#19BD33",
  secondary:"#ffffff",
  grayishBlue:"#3d3d3d",
  lightGrey:"#f0efef"
}
const darkTheme = {
  primary:"#19BD33",
  secondary:"#ffffff",
  grayishBlue:"#3d3d3d",
  lightGrey:"#f0efef"
}

export {
  GlobalStyle,
  darkTheme,
  lightTheme
}