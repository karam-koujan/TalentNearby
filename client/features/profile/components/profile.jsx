import * as React from "react";
import Head from "next/head";
import RatingStars from "../../common/components/ratingStars/";
import Reviews from "./reviews";
import Styles from "../styles/styles.module.css";
import {ProfileImgWrapper,UploadImgElementsWrapper,Wrapper} from "../templates/layout";
import {ReviewersNum, UserName,ErrorMsg} from "../templates/text";
import { Discription,DescriptionList,DescriptionTitle } from "../templates/list";
import {Icon,Pencil,Close, ChangeProfileImgIcon} from "../templates/icons";
import { TextArea,Input,Button,UploadImgBtn, UpdateProfileImgBtn} from "../templates/form";
import { useFormik } from "formik";
import { useMutation,useQueryClient } from "react-query";
import  {useUpdate} from "../../../hooks/httpReq/useUpdate";
import { useUpload } from "../../../hooks/useUpload";


const Profile = ({data:{userName,profileImg,status,bio,active,rating,reviewersNum,job,email,phoneNumber,_id}})=>{
     const [enableElementModification,setEnableElementModification]  = React.useState({
        phoneNumber,
        bio
       })
       const [file,setFile] = React.useState("")  
       const [uploadedImg,setUploadedImg] = React.useState("")
       const [hoverOnProfileImg,setHoverOnProfileImg] = React.useState(false)
       const setUpdate = useUpdate()
       const infoMutation = useMutation(newData=>setUpdate("http://localhost:8080/api/profile/modifyInfo",newData))
       const profileImgMutation = useMutation(newData=>setUpdate("http://localhost:8080/api/profile/updateProfileImg",newData))
       const client = useQueryClient()  
       const setUpload = useUpload()
    
      
    const [err,setErr] = React.useState("");
       const {values,handleChange,handleSubmit} = useFormik({
           initialValues : {
               phoneNumber,
               bio
           },
           onSubmit:()=>{
        
             const formData = {
                 phoneNumber:values.phoneNumber,
                 bio:values.bio
             }  

             if(!active){
                return setErr("please verifiy your email")
             }
             infoMutation.mutate(formData,{
               onSuccess:()=>{
                 client.invalidateQueries('user')
               }
             })
             setEnableElementModification({
                phoneNumber:true,
                bio:true
             })
             window.location.reload(true)
           }
  })   
  const handleUpload = async(e)=>{
    console.log(e.target.files[0])
        try{
           setFile(e.target.files[0])
           const imgUrl = await setUpload(e.target.files[0],"image");
           console.log(imgUrl)
           setUploadedImg(imgUrl)       
          }catch(err){
            console.log(err)
        }
  }  
 const handleUpdateProfileImg = ()=>{
     profileImgMutation.mutate({profileImg:uploadedImg},{
       onSuccess:()=>{
         client.invalidateQueries("user")
       }
     })
     setUploadedImg("")
 }
     return(
       
      <Wrapper>
          <>
          <Head>
            <title>{userName}</title>
          </Head>
          <ProfileImgWrapper profileImg={uploadedImg||profileImg} onMouseEnter={()=>setHoverOnProfileImg(true)} onMouseLeave={()=>setHoverOnProfileImg(false)}>
            {profileImg?<img loading="lazy" src={uploadedImg?uploadedImg:profileImg}  alt={`${userName} image`}/>:null}
             {uploadedImg?(
                    <div className={Styles.uploadImgIconsWrapper}>
                      <UpdateProfileImgBtn onClick={()=>setUploadedImg("")}>
                    <ChangeProfileImgIcon className="fa fa-close"></ChangeProfileImgIcon>
                      </UpdateProfileImgBtn>
                      <UpdateProfileImgBtn onClick={handleUpdateProfileImg}>
                    <ChangeProfileImgIcon className="fa fa-check">
                    </ChangeProfileImgIcon>
                      </UpdateProfileImgBtn>
                  </div>
            ):null}
             <UploadImgElementsWrapper>
           {!uploadedImg&&hoverOnProfileImg?(
           <UploadImgBtn>
            <span>change profile image</span>
            <input  type="file" className={Styles.inputFile} ariaLabel="change your profile image" onChange={handleUpload}/>
          </UploadImgBtn>
           ):null}
             </UploadImgElementsWrapper>
          </ProfileImgWrapper>
          <UserName>
           {userName}
           </UserName>
           {status==="talent"?(
                 <>
                 <RatingStars tooltip="your rating" rating={rating} margin="0 auto"  />
                 <ReviewersNum href="#reviews">{reviewersNum} reviews</ReviewersNum>
                 </>
           ):null}
           <DescriptionList>
           {status==="talent"?(
             <>
             <DescriptionTitle>
               job
             </DescriptionTitle>
             <Discription>
               {job}
             </Discription>
             </>
           ):null}
         <DescriptionTitle>
               Phone
             </DescriptionTitle>
            
                 {enableElementModification.phoneNumber?(
                 <div style={{'display':'flex'}}>
                 <Discription>
            <Icon className="fa fa-phone"></Icon>
              {phoneNumber}
            </Discription>
            <Pencil className="fa fa-pencil" onClick={()=>setEnableElementModification({...enableElementModification,phoneNumber:false})}></Pencil>
                </div>
             ):( 
               <div className={Styles.inputWrapper}>
                 <form  onSubmit={handleSubmit}>
                 <Input  type="tel" placeholder="phone number" name="phoneNumber" value={values.phoneNumber}  onChange={handleChange}/>
                 {err?<ErrorMsg>{err}</ErrorMsg>:null}
                 </form>
             {phoneNumber?<Close className={Styles.close} onClick={()=>setEnableElementModification(prev=>({...prev,phoneNumber:true}))}>&#10006;</Close>:null}
                </div>     
                 )}
             <DescriptionTitle>
               Email
             </DescriptionTitle>
             <Discription>
              <Icon className="fa fa-envelope"></Icon>
              {email}
             </Discription>
             <DescriptionTitle>
              bio
             </DescriptionTitle>
               {enableElementModification.bio?(
                 <div style={{'display':'flex'}}>
            <Discription>
               {bio}
            </Discription>
               <Pencil className="fa fa-pencil" onClick={()=>setEnableElementModification({...enableElementModification,bio:false})}></Pencil>
                 </div>
             ):(
                 <div className={Styles.inputWrapper}>
                   <form  onSubmit={handleSubmit}>
                     <TextArea placeholder="write something about you..." name="bio" onChange={handleChange} value={values.bio} />
                     {err?<ErrorMsg>{err}</ErrorMsg>:null}
                   </form>
                    {bio ? <Close className={Styles.close} onClick={()=>setEnableElementModification(prev=>({...prev,bio:true}))}>&#10006;</Close>:null}
                 </div>
             )}
             
           </DescriptionList>
            {!enableElementModification.bio||!enableElementModification.phoneNumber?(
            <Button type="submit" onClick={handleSubmit} >
                 submit
             </Button>):null} 
           {status==="talent"?<Reviews profileId={_id}/>:null}
  
          </>
        
      </Wrapper>
    )
}
export default Profile ;