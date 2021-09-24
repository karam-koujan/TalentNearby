import styled from "styled-components"


export const Wrapper = styled.div`
 background-color:${props=>props.theme.secondary};
 border-radius:2px;
 box-shadow:0 2px 7px 1px rgb(0 0 0 / 30%);
 left:-130px;
 padding:1rem 0; 
 position:absolute;
 top:-150px;
 width:300px;
 z-index:1;
`