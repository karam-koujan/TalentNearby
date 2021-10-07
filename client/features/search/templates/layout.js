import styled from "styled-components";



export const SearchBoard = styled.div`
  left:-.3rem;
  position:absolute;
  right:-.3rem;
  z-index:-1;
`

export const SearchBoardWrapper = styled.div`
 background-color:${props=>props.theme.secondary};
 box-shadow:1px 1px 2px 1px rgba(0,0,0,.1) , 0px -1px 2px 1px rgba(0,0,0,.1);
 border-radius:6px;
 padding:4rem 0 1rem 0;
 transform:translateY(-.3rem);
 `


export const UserWrapper=styled.div`
  display:flex;
  cursor:pointer;
  gap:.7rem;
  padding: .5rem;
  transition: background-color .2s ease-in-out;

  &:hover,&:focus{
    background-color:rgba(0,0,0,.1);
  }
`
