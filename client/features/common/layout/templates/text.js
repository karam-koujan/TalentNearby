import styled from "styled-components";


export const EmailVerificationText = styled.p`
color:${props=>props.theme.secondary};
margin:0;
padding:1rem 0;
text-align:center;
`

export const VerifiyEmail = styled.span`
 cursor:pointer;
 text-decoration:underline;
`
export const BoxElement=styled.p`
 color:${props=>props.theme.third};
 cursor:pointer;
 margin:0;
 padding:1rem 1rem;
 &:hover,&:focus{
     background-color:rgba(0,0,0,.1);
 }
`
export const FilterTitle = styled.span`
 color:${props=>props.theme.primary};
 display:block;
 font-size:1.2rem;
 margin:0 0 .8rem  0;
 text-transform:capitalize;
`