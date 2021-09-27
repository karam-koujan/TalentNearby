import  * as React  from "react";
import Avatar from "../../common/components/avatar";
import Styles from "../styles/styles.module.css";
import { useFormik } from "formik";
import {Wrapper,FormChildWrapper} from "../templates/layout";
import {UserName,Text, PhoneNumber,Bio} from "../templates/text";
import {Form,Label,TextArea,Button, Input} from "../templates/form";
import {PhoneIcon,Pencil,Close} from "../templates/icons";

const InfoCard = ({data:{userName,profileImg,job,phoneNumber,bio,rating,email},handleCloseCard,onSubmit,errors,disableSubmit,...props})=>{
    const [enableElementModification,setEnableElementModification]  = React.useState({
         phoneNumber,
         bio
        })
    
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
              onSubmit(formData)
             console.log(errors)
              if(!errors){
                  window.location.reload(false); 
              }
            }
   })   

    return(
         <Wrapper {...props} >
             <Close className={Styles.close} onClick={handleCloseCard}>&#10006;</Close>
         <Avatar userName={userName} profileImg={profileImg} size="60px" className={Styles.avatar}/>
         <UserName>
             {userName}
         </UserName>
         <Form   method="PUT" onSubmit={handleSubmit}>
             {errors?<p>{errors.message}</p>:null}
             <FormChildWrapper>
             <Label>
                 Job
             </Label>
            <Text>
                {job}
            </Text>
             </FormChildWrapper>
             <FormChildWrapper>
             <Label>
                 phone
             </Label>
             {enableElementModification.phoneNumber?(
                 <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start'}}>
                 <PhoneNumber>
                <PhoneIcon className="fa fa-phone"></PhoneIcon>{phoneNumber}
            </PhoneNumber>
            <Pencil className="fa fa-pencil" onClick={()=>setEnableElementModification({...enableElementModification,phoneNumber:false})}></Pencil>
                </div>
             ):( <div className={Styles.inputWrapper}>
                 <Input  type="tel" placeholder="phone number" name="phoneNumber" value={values.phoneNumber}  onChange={handleChange}/>
             {phoneNumber?<span className={Styles.close} onClick={()=>setEnableElementModification(prev=>({...prev,phoneNumber:true}))}>&#10006;</span>:null}
             </div> 
             )}
             </FormChildWrapper>
             <FormChildWrapper>
             <Label>
                email
             </Label>
            <Text>
                {email}
            </Text>
             </FormChildWrapper>
             <FormChildWrapper>
             <Label>
                 Bio
             </Label>
             {enableElementModification.bio?(
                 <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start'}}>
            <Bio>
                {bio}
            </Bio>
               <Pencil className="fa fa-pencil" onClick={()=>setEnableElementModification({...enableElementModification,bio:false})}></Pencil>
                 </div>
             ):(
                 <div className={Styles.inputWrapper}>
                     <TextArea placeholder="write something about you..." name="bio" onChange={handleChange} value={values.bio} />
                    {bio ? <span className={Styles.close} onClick={()=>setEnableElementModification(prev=>({...prev,bio:true}))}>&#10006;</span>:null}
                 </div>
             )}
             </FormChildWrapper>
            <Button type="submit" onSubmit={handleSubmit} >
                 submit
             </Button>
            </Form>
         </Wrapper>
   )
}

export default  InfoCard ;