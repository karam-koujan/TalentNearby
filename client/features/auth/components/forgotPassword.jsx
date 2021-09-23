import * as React from "react";
import * as Yup from "yup";
import {useRouter} from "next/router";
import {useFormik} from "formik";
import {usePost} from "../../../hooks/httpReq/usePost";
import {serverStateReducer} from "./reducers/serverState";
import {Form,Input,Label,InputErr,PrimaryBtn,InputWrapper,ServerErr, ResponseSucceed} from "../templates/";




const ForgotPassword = ({forgotpasswordAs})=>{
  const [resetPassword,setResetPassword] = React.useState(false);
 // const [responseErr,setResponseErr] = React.useState('');
  //const [responseSucceed,setResponseSucceed]= React.useState('');
  const [state,dispatch] = React.useReducer(serverStateReducer,{
    resErr:"",
    resSucceed:""
  })
  const {resErr,resSucceed} = state ;
  const router = useRouter()
  const setPost = usePost();
    const validationSchema = Yup.object({
        email:Yup.string().email().required(),
    })
    const {errors,values,touched,handleChange,handleSubmit,handleBlur} = useFormik({
        initialValues:{
          email:"",
          code:"",
          password:"",
          confirm:""
        },
        validationSchema,
        onSubmit : async()=>{
          let status= "freelancer";
          if(forgotpasswordAs!=="talent"){
            status="client"
          }
          if(resetPassword && values.code){
             try{
             await setPost(`http://localhost:8080/api/auth/forgotPassword/resetPassword/${status}`,{email:values.email,password:values.password})
             
             //setResponseErr('')
             dispatch({type:"res__error",payload:""})
             return router.push(`/auth/signin/${forgotpasswordAs}`)
            }catch(err){
              //setResponseSucceed('')
              dispatch({type:"res__succeed",payload:""})
              //return setResponseErr(err.response.data.message)
               return dispatch({type:"res__error",payload:err.response.data.message}) 
            }
        }
        if(values.code&&!resetPassword){
            try{
              await setPost(`http://localhost:8080/api/auth/forgotPassword/codeVerification/`,{email:values.email,code:values.code})
             //setResponseErr('')
             dispatch({type:"res__succeed",payload:""}) 
             return setResetPassword(true)
            }catch(err){
              //setResponseSucceed('')
              dispatch({type:"res__succeed",payload:""})
              //return setResponseErr(err.response.data.message)
               return dispatch({type:"res__error",payload:err.response.data.message}) 

            }
          }
          
            try{
              await setPost(`http://localhost:8080/api/auth/forgotPassword/sendResetPasswordCode/${status}`,{email:values.email})
               dispatch({type:"res__error",payload:""}) 
              //setResponseErr('')
              //return setResponseSucceed('The verification Email is sent')
              return dispatch({type:"res__succeed",payload:'The verification Email is sent'})  
            }catch(err){
              //setResponseSucceed('')
              rdispatch({type:"res__succeed",payload:""})  

              //return   setResponseErr(err.response.data.message)
                return  dispatch({type:"res__error",payload:err.response.data.message}) 
  
            }
        }
    })
      return(
        <>
        {resErr?<ServerErr>{resErr}</ServerErr>:null}
        {resSucceed?<ResponseSucceed >{resSucceed}</ResponseSucceed>:null} 
        <Form action="" onSubmit={handleSubmit} style={{"--width":"80%","--maxWidth":"400px","margin":"0 auto"}}>
          <InputWrapper>
          <Label for="email">
            Email
          </Label>
         <Input 
         type="email"
         name="email"
         placeholder="Email"
         id="email"
         value={values.email}
         onChange={handleChange}
         onBlur ={handleBlur}
         error={errors.email&&touched.email}
         required
         />
         {errors.email&&touched.email?<InputErr>{errors.email}</InputErr>:null}
           </InputWrapper>
           <InputWrapper>
          <Label for="verification-code">
            Verification Code
          </Label>
         <Input 
         type="password"
         name="code"
         placeholder="verification code"
         id="verification-code"
         value={values.code}
         onChange={handleChange}
         onBlur ={handleBlur}
         error={errors.code&&touched.code}
         />
         {errors.code&&touched.code?<InputErr>{errors.code}</InputErr>:null}
           </InputWrapper>
           <InputWrapper>
          <Label for="password">
            Password
          </Label>
         <Input 
         type="password"
         name="password"
         placeholder="password"
         id="password"
         value={values.password}
         onChange={handleChange}
         onBlur ={handleBlur}
         error={errors.password&&touched.password}
         disabled={!resetPassword}
         required
         />
         {errors.password&&touched.password?<InputErr>{errors.password}</InputErr>:null}
           </InputWrapper>
           <InputWrapper>
          <Label for="confirm-password">
            Password
          </Label>
         <Input 
         type="password"
         name="confirm"
         placeholder="confirm"
         id="confirm-password"
         value={values.confirm}
         onChange={handleChange}
         onBlur ={handleBlur}
         error={values.password!==values.confirm && touched.confirm}
         disabled={!resetPassword}
         required
         />
         {values.password!==values.confirm && touched.confirm?<InputErr>Wrong Password</InputErr>:null}
           </InputWrapper>
           <PrimaryBtn type="submit">
                 Submit
           </PrimaryBtn>
         </Form>
         </>
      )
}
export default ForgotPassword;