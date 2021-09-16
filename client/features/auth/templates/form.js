import styled from "styled-components";





const Form = styled.form`
`

const InputInterface= styled.input`
 border-radius:2px;
 display:block;
 margin:0 0 1.5rem 0;
 padding:.8rem .5rem;
 width:100%;
 border:1px solid ${({error,theme})=>error?'red':theme.third};

 &:hover,&:focus{
     background:none;
     outline-color:${props=>props.theme.primary};
 }
 &::placeholder{
     font-family 'Work Sans', sans-serif;
 }
 
`
const Input = styled(InputInterface)`

`
const InputErr = styled.p`
 color:red;
 margin:0;
 transform:translateY(-1.2rem);
`
const SignUpPassword = styled(InputInterface)`
 width:100%; 
`
const Email = styled(InputInterface)`
 width:100%;
`

const LongLatitude = styled(InputInterface)`
 width:100%;
`
const CheckBox= styled.input`
   background-color:${props=>props.theme.primary}
   padding: 10px;
  -ms-transform: scale(1.5); 
  -moz-transform: scale(1.5); 
  -webkit-transform: scale(1.5); 
  -o-transform: scale(1.5); 
  transform: scale(1.5);
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
    SignUpPassword,
    Email,
    InputErr
}
