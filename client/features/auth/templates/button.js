import styled from "styled-components";


const BtnInterface=styled.button`
 border-radius:1000px;
 color:${props=>props.theme.secondary};
 display:block;
 letter-spacing:2px;
 padding:1.5em 5em;
 text-transform:uppercase;
 transition:background-color .3s linear , color .3s linear;
`
const PrimaryBtn = styled(BtnInterface)`
 background-color:${props=>props.theme.primary};
 border:1.5px solid ${props=>props.theme.primary};
 margin:2rem auto 0 auto;
 width:45%;
 &:hover,&:focus{
    background-color:${props=>props.theme.secondary};
    color:${props=>props.theme.primary};
}
`

const SecondaryBtn = styled(BtnInterface)`
 border:1.5px solid ${props=>props.theme.secondary};
 margin:2.5rem auto;
 &:hover,&:focus{
     background-color:${props=>props.theme.secondary};
     color:${props=>props.theme.primary};
 }
`
export {
    PrimaryBtn,
    SecondaryBtn
}