import  * as React  from "react";
import * as Yup from "yup";
import Avatar from "../../common/components/avatar";
import Styles from "../styles/styles.module.css"
import {Wrapper,FormChildWrapper} from "../templates/layout";
import {UserName,Text, PhoneNumber,Bio} from "../templates/text";
import {Form,Label,TextArea,Button, Input} from "../templates/form";
import {PhoneIcon,Pencil,Close} from "../templates/icons";
import { useFormik } from "formik";
const ProfileCard = ({data:{userName,profileImg,job,phoneNumber,bio,rating,email},handleCloseCard,...props})=>{
    const [enableElementModification,setEnableElementModification]  = React.useState({
         phoneNumber,
         bio
        })
    const [display,setDisplay] = React.useState("block")
     const {errors,touched,values,handleBlur,handleChange,handleSubmit} = useFormik({
              initialValues : {
                  phoneNumber,
                  bio
              }
     })   
    return(
         <Wrapper {...props} display={display}>
             <Close className={Styles.close} onClick={handleCloseCard}>&#10006;</Close>
         <Avatar userName={userName} profileImg={profileImg} size="60px" className={Styles.avatar}/>
         <UserName>
             {userName}
         </UserName>
         <Form>
             <FormChildWrapper>
             <Label>
                 Job
             </Label>
            <Text>
                Developer
            </Text>
             </FormChildWrapper>
             <FormChildWrapper>
             <Label>
                 phone
             </Label>
             {enableElementModification.phoneNumber?(
                 <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start'}}>
                 <PhoneNumber>
                <PhoneIcon className="fa fa-phone"></PhoneIcon>0605407515{phoneNumber}
            </PhoneNumber>
            <Pencil className="fa fa-pencil" onClick={()=>setEnableElementModification({...enableElementModification,phoneNumber:false})}></Pencil>
                </div>
             ):( <div className={Styles.inputWrapper}>
                 <Input  type="tel" placeholder="phone number" name="phoneNumber" value={values.phoneNumber}  onBlur={handleBlur}onChange={handleChange}/>
             {phoneNumber?<span className={Styles.close}>&#10006;</span>:null}
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
               I make people buisness idea come true through high quality software with high quality service we offere refund if you dont like our work{bio}
            </Bio>
               <Pencil className="fa fa-pencil" onClick={()=>setEnableElementModification({...enableElementModification,bio:false})}></Pencil>
                 </div>
             ):(
                 <div className={Styles.inputWrapper}>
                     <TextArea placeholder="write something about you..." name="bio" onChange={handleChange} value={values.bio} onBlur={handleBlur}/>
                    {bio ? <span className={Styles.close}>&#10006;</span>:null}
                 </div>
             )}
             </FormChildWrapper>
             <Button>
                 Submit
             </Button>
            </Form>
         </Wrapper>
   )
}

export default  ProfileCard ;