import {UpdateProfileImgBtn} from "../templates/form";
import {ModalWrapper,Modal,ProfileImgWrapper} from "../templates/layout";
import Styles from "../styles/styles.module.css";





const UpdateProfileImg = ({profileImg,userName})=>{
  return(
       <ModalWrapper>
            <Modal>
                <ProfileImgWrapper style={{'height':'200px'}}>
                    <img src={profileImg} alt={`${userName} profile image`}/>
                </ProfileImgWrapper>
             <div style={{'display':'flex','padding':'2rem 1rem','justifyContent':'space-between','width':'100%'}}>
                 <UpdateProfileImgBtn>
                    Deny
                 </UpdateProfileImgBtn>
                 <UpdateProfileImgBtn>
                        Accept
                 </UpdateProfileImgBtn>
             </div>
            </Modal>
       </ModalWrapper>
  )
}

export default UpdateProfileImg;