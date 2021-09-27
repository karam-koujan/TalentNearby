import * as React from "react";
import * as Yup from "yup";
import Spinner from "../../common/components/spinner";
import Styles from "../styles/style.module.css";
import {useFormik} from "formik";
import {useRouter} from "next/router";
import {Form,Input,InputErr,PrimaryBtn,CheckBox,CheckBoxLabel,Label,SignUpPassword,ServerErr,Warning,LongLatitude,Email,CheckBoxTitle,SecondaryBtn,SlideDownWrapper,InputWrapper} from "../templates/";
import { usePost } from "../../../hooks/httpReq/usePost";


 const SignUp = ()=>{
  const [responseErr,setResponseErr] = React.useState('');
  const [isLoading,setIsLoading] = React.useState(false);
  const router = useRouter()
  const setPost = usePost()
  const validationSchema = Yup.object({
    userName:Yup.string().min(3,"userName must have at least 3 letters").max(20,"userName must have at maximum 20").required(),
    email :Yup.string().email("this email is invalid").required(),
    longitude:Yup.number().max(180,"longitude value doesn't get greater than 180").min(-180,"longitude value doesn't get less than -180").required(),
    latitude:Yup.number().max(90,"longitude value doesn't get greater than 90").min(-90,"longitude value doesn't get greater than -90").required(),
    password:Yup.string().min(8,"the password should be at least 8").required(),
    confirm : Yup.string()
    .oneOf([Yup.ref("password"), null], "Does not match with password").required('confirm is required'),
     })
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
      userName:"",
      email :"",
      phoneNumber:"",
      longitude:"",
      latitude:"",
      password:"",
      confirm:"",
      client:false,
      talent:false      
    },
    validationSchema,
    onSubmit:async()=>{
      setIsLoading(true)
      let signupAs = "talent";
      let endpoint = 'http://localhost:8080/api/auth/signup/freelancer';
       if(values.client){
         endpoint = 'http://localhost:8080/api/auth/signup/client';
        signupAs = "client"
        }
     const data = {
       userName:values.userName,
       email:values.email,
       longitude:values.longitude,
       latitude:values.latitude,
       password:values.password
      }
      try{
        await setPost(endpoint,data,false);
       router.push(`/auth/signin/${signupAs}`)
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
        {errors.email&&touched.email?<InputErr>{errors.email}</InputErr>:null}
         </InputWrapper>
        <div className={Styles.fieldsWrapper}>
          <InputWrapper>
        <Label htmlFor="longitude">longitude</Label>
        <LongLatitude 
        type="number" 
        placeholder="Longitude" 
        id="longitude" 
        name="longitude" 
        arial-label="longitude" 
        max="180" 
        min="-180" 
        value={values.longitude}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.longitude && touched.longitude}
        required/>
          {errors.longitude&&touched.longitude?<InputErr>{errors.longitude}</InputErr>:null}
          </InputWrapper>
        <InputWrapper>
        <Label htmlFor="latitude">latitude</Label>
        <LongLatitude 
        type="number" 
        placeholder="Latitude" 
        id="latitude" 
        name="latitude" 
        arial-label="latitude" 
        max="90" 
        min="-90" 
        value={values.latitude}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.latitude && touched.latitude}
        required/>
        {errors.latitude&&touched.latitude?<InputErr>{errors.latitude}</InputErr>:null}
        </InputWrapper>
        </div>
       
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
        <CheckBoxTitle>
          Do you want to create your account as ?
        </CheckBoxTitle>
         <div style={{display:"flex",width:"40%","justifyContent":"space-between"}}>
          <div >
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
       
         <PrimaryBtn type="submit" >
           {isLoading?<Spinner/>:'sign up'}
         </PrimaryBtn>
      </Form>
  )
}

export default SignUp;