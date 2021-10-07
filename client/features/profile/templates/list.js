import styled from "styled-components";




export const DescriptionList = styled.dl`
 padding: 1rem 1rem 0 1rem;
`;


export const DescriptionTitle = styled.dt`
 color:${props=>props.theme.primary};
 text-transform:uppercase;
`

export const Discription = styled.dd`
 color:${props=>props.theme.third};
 margin:.5rem 0 1rem 0 ;
`