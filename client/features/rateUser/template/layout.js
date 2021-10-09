import styled from "styled-components";



export const Wrapper =styled.div`
 align-items:center;
 background-color:rgba(0,0,0,0.3);
 bottom:0;
 display:flex;
 justify-content:center;
 left:0;
 position:absolute;
 right:0;
 width:100%;
 top:0;
 z-index:1;
`


export const Modal = styled.div`
 background-color:${props=>props.theme.secondary};
 color:${props=>props.theme.third};
 cursor:pointer;
 max-width:500px; 
 padding:2rem 2rem;
 position:relative;
 width:800%;
 z-index:10000;
`

