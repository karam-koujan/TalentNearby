import styled from "styled-components";

export const Wrapper = styled.div`
 color:grey;
 margin:0 auto;
 width:fit-content;
`



export const Star = styled.span`
 color:${({checked})=>checked?'orange':'grey'};
 font-size:1.1rem;
`
