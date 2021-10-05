import styled from "styled-components";


export const Form = styled.form``
export const TextArea = styled.textarea`
 border:2px solid ${props=>props.theme.primary};
 color:${props=>props.theme.third};
 height:100px;
 padding:.5rem 0 0 .5rem;
 resize:none;
 width:100%;
 &:hover,&:focus{
     outline:none;
 }
`

export const Label = styled.label`
 color:${props=>props.theme.primary};
 display:block;
 margin:.5rem 0;
 text-transform :uppercase;
`
export const Button = styled.button`
background-color:${props=>props.theme.primary};
border-radius:2px;
color:white;
display:block;
letter-spacing:2px;
margin:.5rem auto 0 auto;
opacity:${({disabled})=>!disabled?1:0.8};
padding:.5rem 1rem;
text-transform :uppercase;

&:hover,&:focus{
    z-index:1;
    opacity:.0rem;
}
`