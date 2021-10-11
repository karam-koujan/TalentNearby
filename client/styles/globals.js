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

 .tooltip {
  position: relative;
}

.tooltip .tooltiptext {
  top:-200%;
  left:-10%;
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%; 
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
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