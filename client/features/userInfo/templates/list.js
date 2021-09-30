import styled from "styled-components";




export const DescriptionList = styled.dl`
padding:0 2rem; 

`



export const DescriptionTitle = styled.dt`
color:${(props)=>props.theme.primary};
 display:block;
 font-size:13px;
 margin:.5rem  0;
 text-transform:uppercase;
`


export const Description = styled.dd`
color:${props=>props.theme.third};
font-size:.8rem;
margin: .2rem 0;
`