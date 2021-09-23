import styled from "styled-components"



export const AvatarInterface = styled.div`
  border-radius:50%;
  cursor:pointer;
  height:${({size})=>size};
  width:${({size})=>size};
`

export const DefaultAvatar = styled(AvatarInterface)`
align-items:center;
background-color:${props=>props.theme.primary};
display:flex;
flex-direction:column;
justify-content:center;


`

export const Avatar = styled(AvatarInterface)`

  & img{
   border-radius:50%;
   height:100%;
   object-fit:cover;     
  }
`

export const UserName = styled.span`
  color:${props=>props.theme.secondary};
  font-size:22px;
  text-transform:uppercase;
`