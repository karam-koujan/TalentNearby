import styled from "styled-components"


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

`
export const FormChildWrapper = styled.div`
 width:100%;
`