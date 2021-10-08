import styled from "styled-components";




export const SearchIcon = styled.span`
  color:${props=>props.theme.secondary};
  font-size:1.2rem;
`

const Close = styled.span`
 color:${props=>props.theme.third};
 cursor:pointer;
 font-size:16px;
`
export const RemoveSearchText= styled(Close)`
 position:absolute;
 right:15%;
 top:22%;
 `

export const CloseProfileBar = styled(Close)`
 color:${props=>props.theme.secondary};
` 