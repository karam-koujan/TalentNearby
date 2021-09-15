import styled from "styled-components";


const Header = styled.header`
padding:2rem 3rem;
&>span{
  color:${props=>props.theme.secondary};
  font-size:25px;
}
`

const IntroSection = styled.section`
 align-items:center;
 background-color:${props=>props.theme.primary};
 display:flex;
 flex-direction:column;
 width:40%;
 z-index:0;
`

const FormSection = styled.section`
 align-items:center;
 background-color:${props=>props.secondary};
 display:flex;
 flex-direction:column;
 width:60%;
`

const FlexWrapper = styled.main`
 bottom:0;
 display:flex;
 width:100%;
 position:absolute;
 top:0;
`

const Wrapper = styled.div`
  margin:var(--margin);
  width:var(--width);
`
export {
  Header,
  IntroSection,
  FormSection,
  FlexWrapper,
  Wrapper
}
