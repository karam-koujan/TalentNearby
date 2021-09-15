import styled from "styled-components";





const Form = styled.form`
`

const InputInterface= styled.input`
 border:1px solid ${props=>props.theme.third};
 border-radius:2px;
 display:block;
 margin:0 0 1.5rem 0;
 padding:.8rem .5rem;
 width:100%;

 &:hover,&:focus{
     background:none;
     outline-color:${props=>props.theme.primary};
 }
 &::placeholder{
     font-family 'Work Sans', sans-serif;
 }
 
`
const Input = styled(InputInterface)``
const SignUpPassword = styled(InputInterface)`
 width:48%; 
`

const LongLatitude = styled(InputInterface)`
 width:48%;
`
const CheckBox= styled.input`
   background-color:${props=>props.theme.primary}
  -ms-transform: scale(1.5); 
  -moz-transform: scale(1.5); 
  -webkit-transform: scale(1.5); 
  -o-transform: scale(1.5); 
  transform: scale(1.5);
  padding: 10px;
  
`
const CheckBoxLabel=styled.label`
 color:${props=>props.theme.third};
 margin-left:.5rem;
`
const Label = styled.label`
 display:none;
`
export {
    Form,
    Input,
    CheckBox,
    Label,
    CheckBoxLabel,
    LongLatitude,
    SignUpPassword
}
