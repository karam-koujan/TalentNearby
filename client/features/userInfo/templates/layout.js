import styled,{css} from "styled-components"


export const Wrapper = styled.div`
 background-color:${props=>props.theme.secondary};
 border-radius:2px;
 box-shadow:0 2px 7px 1px rgb(0 0 0 / 30%);
 cursor:pointer;
 position:relative;
 padding:1rem 0;
 transform:translate(-50%,-100%); 
 width:300px;
 z-index:10000;

  ${({isLoading})=>isLoading?css`
  height:280px;
  transform:translate(-40%,-5%); 

  `:null}
`
export const FormChildWrapper = styled.div`
 width:100%;
`


export const Circle = styled.div`
   background-color:lightgrey;
   border-radius:50%;
   height:60px;
   margin:0 auto;
   width:60px;
`
export const Rectangle = styled.div`
background-color:lightgrey;
height:10px;
margin:${({margin})=>margin};
width:${({width})=>width};
`
