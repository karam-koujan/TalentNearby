import * as React from "react";
import RatingStars from "../../common/components/ratingStars/";
import Reviews from "./reviews";
import Styles from "../styles/styles.module.css";
import {ProfileImgWrapper,Wrapper} from "../templates/layout";
import {ReviewersNum, UserName,ErrorMsg} from "../templates/text";
import { Discription,DescriptionList,DescriptionTitle } from "../templates/list";
import {Icon,Pencil,Close} from "../templates/icons";
import { TextArea,Input,Button} from "../templates/form";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useMutation,useQueryClient } from "react-query";
import  {useUpdate} from "../../../hooks/httpReq/useUpdate";


const Profile = ({data:{userName,profileImg,status,bio,active,rating,reviewersNum,job,email,phoneNumber,_id}})=>{
     const router = useRouter()  
     const [enableElementModification,setEnableElementModification]  = React.useState({
        phoneNumber,
        bio
       })
       const setUpdate = useUpdate()
       const mutation = useMutation(newData=>setUpdate("http://localhost:8080/api/profile/modifyInfo",newData))
       const client = useQueryClient()  
   
    
      
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
             mutation.mutate(formData)
             client.invalidateQueries('user')
             setEnableElementModification({
                phoneNumber:true,
                bio:true
             })
             window.location.reload(true)
           }
  })   
    
     return(
      <Wrapper>
          <>
          <ProfileImgWrapper profileImg={profileImg}>
            {profileImg?<img loading="lazy" src={profileImg}  alt={`${userName} image`}/>:null}
          </ProfileImgWrapper>
          <UserName>
           {userName}
           </UserName>
           {status==="talent"?(
                 <>
                 <RatingStars rating={rating} margin="0 auto"  />
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