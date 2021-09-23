import styled , {css} from "styled-components";



export const IntroText = styled.p`
 color:${props=>props.theme.secondary};
 font-size:18px;
 letter-spacing:1px;
 line-height:40px;
 margin:0;
 width:90%;
 &::first-letter{
     text-transform:capitalize;
 }
`

export const FormText = css`
 color:${props=>props.theme.third}
`
export const CheckBoxTitle = styled.p`
${FormText}
`
export const ForgotPass = styled.a`
display:block;
margin:0 auto;
&:hover,&:focus{
    text-decoration:underline;
}
${FormText}
`      

export const Warning = styled.p`
  color :red;
  font-size:15px;
  line-height:20px;
`

export const Err = styled.p`
color:red;
`
export const InputErr = styled(Err)`
  margin:0;
 `
 export const ServerErr = styled(Err)`
 text-align:center;

 `
 export const ResponseSucceed = styled.p`
  color:${props=>props.theme.primary} 
  text-align:center;
  ` 
