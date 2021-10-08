import styled from "styled-components";

export const Wrapper = styled.div`
 color:grey;
 margin:var(--margin);
 width:fit-content;
`



export const Star = styled.span`
 color:${({checked})=>checked?'orange':'grey'};
 font-size:${({size})=>size?size:"1.1rem"};
`
