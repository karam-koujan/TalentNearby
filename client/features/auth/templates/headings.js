import styled from "styled-components";



const MainHeading = styled.h1`
 color:${props=>props.theme.primary};
 font-size:40px;
 font-weight:bold;
 letter-spacing:1px;
 margin:0 0 3rem 0;
 text-align:center;
 text-transform:capitalize;
`

const SecondaryHeading = styled.h2`
  color:${props=>props.theme.secondary};
  font-size:39px;
  font-weight:bold;
  letter-spacing:1.5px;
  margin:0 0 2rem 0;
  text-transform:capitalize;
`


export {
    MainHeading,
    SecondaryHeading
}