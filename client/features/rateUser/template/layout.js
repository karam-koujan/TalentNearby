import styled from "styled-components";



export const Wrapper = styled.div`
 background-color:${props=>props.theme.secondary};
 color:${props=>props.theme.third};
 cursor:pointer;
 padding:1rem 2rem;
 position:relative;
 transform:translate(-40%,-10%); 
 width:300px; 
 z-index:10000;
`

