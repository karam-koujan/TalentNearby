import styled from "styled-components";


export const UserName = styled.p`
  color:${props=>props.theme.primary}; 
  font-size:1.3rem;
  letter-spacing:1px;
  margin:.5rem 0;
  text-align:center;
`

export const Text = styled.p`
  color:${props=>props.theme.third};
  font-size:.8rem;
  margin: .2rem 0;
`

export const Bio = styled(Text)`
 line-height:17px;
 width:91%;
`
export const PhoneNumber = styled(Text)`
 letter-spacing:1px;
`
export const ErrMsg = styled.span`
 color:red;
 display:block;
 font-size:.8rem;
 margin:0 auto .5rem auto;
 width:fit-content;
`