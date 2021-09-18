import styled,{css} from "styled-components";


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
const InputWrapper = styled.div`
  position:relative;
  margin:0 0 2rem 0;
`
const SlideDownWrapper  = styled(Wrapper)`
  background-color:${props=>props.theme.primary};
  border-radius:3px;
  box-shadow:1px 1px 10px 2px rgba(0,0,0,.2);
  color:${props=>props.theme.secondary};
  left:30%;
  max-width:400px;
  opacity:0;
  padding:1rem 0;
  position:absolute;
  text-align:center;
  width:70%;
  top:${({from})=>from};
  transform:translateX(-50%);
  transition:top 1.5s 1s ease-in,opacity 1.5s 1s ease-in;
  ${({condition})=>condition?css`
   opacity:1;
   top:${({to})=>to}`:null}

`

export {
  Header,
  IntroSection,
  FormSection,
  FlexWrapper,
  Wrapper,
  SlideDownWrapper,
  InputWrapper
}
