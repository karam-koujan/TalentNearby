import styled,{css} from "styled-components";


export const Wrapper = styled.aside`
  background-color:${props=>props.theme.secondary};
  bottom :0;
  box-shadow:1px 0 5px rgba(0,0,0,.2);
  max-width:400px;
  overflow-Y:auto;
  position:fixed;
  top:0;
  width:100%;
  z-index:1;
  ::-webkit-scrollbar {
    backgound-color:transparent;
    width: 0px;
  }
   animation-name:slide;
   animation-direction: alternate;
   animation-duration:.5s;
   animation-timing-function:linear;
   animation-fill-mode:forwards;
  @keyframes slide{
    0%{
     left:-100%;
    }
    100%{
      left:0;
    }
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`

export const ProfileImgWrapper = styled.div`
  position:relative;
  height:250px;
 ${({profileImg})=>!profileImg?css`
  background-color:${props=>props.theme.third};
  height:250px;
 `:null}
  width:100%; 

  &>img{
    height:100%;
    object-fit:cover;
  }
`

export const ReviewsWrapper =styled.div`
 padding:1rem;
`
export const ReviewWrapper = styled.div`
  padding:.5rem 0 1rem 0;
`

export const UserNameRatingWrapper = styled.div``


export const UploadImgElementsWrapper=styled.div`
 align-items:center;
 bottom:0;
 cursor:pointer;
 flex-direction:column;
 display:flex;
 justify-content:center;
 position:absolute;
 top:0;
 width:100%;
`