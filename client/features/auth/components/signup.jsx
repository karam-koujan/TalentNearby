import * as React from "react";
import * as Yup from "yup";
import Spinner from "../../common/components/spinner";
import Styles from "../styles/style.module.css";
import {useFormik} from "formik";
import {useRouter} from "next/router";
import {Form,Input,LinkText,InputErr,Text,PrimaryBtn,CheckBox,CheckBoxLabel,Label,SignUpPassword,ServerErr,Warning,LongLatitude,Email,CheckBoxTitle,SecondaryBtn,SlideDownWrapper,InputWrapper} from "../templates/";
import { usePost } from "../../../hooks/httpReq/usePost";


 const SignUp = ()=>{
  const [defaultGeoLocation,setDefaultGeoLocation] = React.useState(undefined) 
  React.useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
          setDefaultGeoLocation(
            {
          longitude:position.coords.longitude,
          latitude:position.coords.latitude
          }
        )
      })
    
  },[])
  
  const [responseErr,setResponseErr] = React.useState('');
  const [isLoading,setIsLoading] = React.useState(false);
  const router = useRouter()
  const setPost = usePost()
  const validationSchema = Yup.object({
    userName:Yup.string().min(3,"userName must have at least 3 letters").max(20,"userName must have at maximum 20").required(),
    email :Yup.string().email("this email is invalid").required(),
    password:Yup.string().min(8,"the password should be at least 8").required(),
    confirm : Yup.string()
    .oneOf([Yup.ref("password"), null], "Does not match with password").required('confirm is required'),
     })
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
      userName:"",
      email :"",
      phoneNumber:"",
      job:"",
      password:"",
      confirm:"",
      client:false,
      talent:false      
    },
    validationSchema,
    onSubmit:async()=>{
      setIsLoading(true)
      if(!defaultGeoLocation){
        setResponseErr("enable geoLocation in your browser")
      }
      let data = {
        userName:values.userName,
        email:values.email,
        password:values.password,
        status:"client",
        longitude:defaultGeoLocation.longitude,
        latitude:defaultGeoLocation.latitude
       }
       if(values.talent){
        data = {...data,status:"talent",job:values.job,phoneNumber:values.phoneNumber}
        }
      try{
        await setPost("http://localhost:8080/api/auth/signup/client",data,false);
       router.push(`/auth/signin/`)
      }catch(err){
        setResponseErr(err.response.data.message)
      }
      setIsLoading(false)
    }

  })
 
  return(
      <Form action="" onSubmit={handleSubmit}>
        {responseErr?<ServerErr>{responseErr}</ServerErr>:null}
        <InputWrapper>
        <Label htmlFor="userName">UserName</Label>
        <Input type="text"
        placeholder="Username" 
        name="userName" 
        id="userName" 
        arial-label="userName" 
        value={values.userName}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.userName&&touched.userName}
        required/>
        {errors.userName&&touched.userName?<InputErr>{errors.userName}</InputErr>:null}
        </InputWrapper>
         <InputWrapper>
        <Label htmlFor="email">Email</Label>
        <Email
        type="text" 
        placeholder="Email"
        id="email" 
        name="email" 
        aria-label="email"
        value={values.email}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.email && touched.email}
        required
        />
       
      </InputWrapper>       
        <div className={Styles.fieldsWrapper}>
        <InputWrapper>
        <Label htmlFor="passoword">password</Label>
        <SignUpPassword 
        type="password" 
        placeholder="Password" 
        id="password"  
        name="password" 
        arial-label="password"
        value={values.password}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.password && touched.password}
        required/>
        {errors.password&&touched.password?<InputErr>{errors.password}</InputErr>:null}
          </InputWrapper>
          <InputWrapper>
        <Label htmlFor="confirm-passowrd"> confirm password</Label>
        <SignUpPassword 
        type="password" 
        placeholder="Confirm" 
        id="confirm-password"  
        name="confirm" 
        arial-label="confirm password"
        onChange={handleChange}
        onBlur = {handleBlur}
        value={values.confirm}
        error={values.password!==values.confirm&&values.confirm!==""&&touched.confirm}
        required/>
        {errors.confirm&&touched.confirm?<InputErr>{errors.confirm}</InputErr>:null}
          </InputWrapper>
        </div>
          {values.talent?(
        <div className={Styles.fieldsWrapper}>
       <InputWrapper>
       <Label htmlFor="phoneNumber">phone number</Label>
       <Input
        type="tel"    
        placeholder="phone number"
        id="phoneNumber" 
        name="phoneNumber" 
        aria-label="phoneNumber"
        value={values.phoneNumber}
        onChange={handleChange}
        required
         />
       </InputWrapper>  
       <InputWrapper>
       <Label htmlFor="job">job</Label>
       <Input
        type="text"    
        placeholder="job"
        id="job" 
        name="job" 
        aria-label="job"
        value={values.job}
        onChange={handleChange}
        required
         />
       </InputWrapper>         
        </div>
         ):null}
        <CheckBoxTitle>
          Do you want to create your account as ?
        </CheckBoxTitle>
         <div style={{display:"flex",width:"100%",}}>
          <div style={{margin:"0 1rem 0 0"}}>
          <CheckBox 
          type="checkbox" 
          id="client"  
          name="client" 
          arial-label="client" 
          value={values.client}
          onChange={handleChange}
          onBlur = {handleBlur}
          disabled={values.talent}
          required={!values.client&&!values.talent}

          />
          <CheckBoxLabel htmlFor="client">client</CheckBoxLabel>
          </div>
          <div >
          <div>
        <CheckBox 
        type="checkbox" 
        id="talent"  
        name="talent" 
        arial-label="talent" 
        value={values.talent}
        onChange={handleChange}
        onBlur = {handleBlur}
        disabled={values.client}
        required={!values.client&&!values.talent}
        />
        <CheckBoxLabel htmlFor="talent">talent</CheckBoxLabel>
        </div>
          </div>
        </div>
      
       <Text>
         already have an account ?<LinkText href="/auth/signin">sign in</LinkText>
       </Text>
         <PrimaryBtn type="submit" >
           {isLoading?<Spinner/>:'sign up'}
         </PrimaryBtn>
      </Form>
  )
}

export default SignUp;