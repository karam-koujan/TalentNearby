import styled from "styled-components";


export const Form = styled.form`
 color:${props=>props.theme.third};
 padding:0 2rem; 
 width:100%;
`

export const Label = styled.label`
 color:${(props)=>props.theme.primary};
 display:block;
 font-size:13px;
 margin:.5rem  0;
 text-transform:uppercase;
`
export const SelectJob = styled.select`
border:1.5px solid ${props=>props.theme.third};
color :${props=>props.theme.third};
padding:.2rem 0;
width:100%;

&:focus{
    border:1.5px solid ${props=>props.theme.primary};
    outline:none;
}
`

export const JobOptions = styled.option`
 
`

export const TextArea = styled.textarea`
 border:2px solid ${props=>props.theme.primary};
 border-radius:3px;
 color:${props=>props.theme.third};
 padding:.5rem;
 resize:none;
 height:100px;
 width:100%;

 &:focus{
     border:2px solid ${props=>props.theme.primary};
     outline:none;
 }
`

export const Button = styled.button`
  background-color:${props=>props.theme.primary};
  border-radius:2px;
  color:white;
  display:block;
  letter-spacing:2px;
  margin:.5rem auto 0 auto;
  padding:.5rem 1rem;
  text-transform :uppercase;

  &:hover,&:focus{
      z-index:1;
      opacity:.0rem;
  }
`

export const Input = styled.input`
border:2px solid ${props=>props.theme.primary};
border-radius:3px;
color:${props=>props.theme.third};
padding:.5rem;
width:100%;
&:focus{
    border:2px solid ${props=>props.theme.primary};
    outline:none;
}
`