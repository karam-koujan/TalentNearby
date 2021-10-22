import * as React from "react";
import * as Yup from "yup";
import {useRouter} from "next/router";
import {useFormik} from "formik";
import {usePost} from "../../../hooks/httpReq/usePost";
import {serverStateReducer} from "./reducers/serverState";
import {Form,Input,Label,InputErr,PrimaryBtn,InputWrapper,ServerErr, ResponseSucceed} from "../templates/";




const ForgotPassword = ()=>{
  const [resetPassword,setResetPassword] = React.useState(false);
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

          if(resetPassword && values.code){
             try{
             await setPost("http://localhost:8080/api/auth/forgotPassword/resetPassword/client",{email:values.email,password:values.password},false)
             
            
             dispatch({type:"res__error",payload:""})
             return router.push("/auth/signin")
            }catch(err){
              
              dispatch({type:"res__succeed",payload:""})
              
               return dispatch({type:"res__error",payload:err.response.data.message}) 
            }
        }
        if(values.code&&!resetPassword){
            try{
              await setPost("http://localhost:8080/api/auth/forgotPassword/codeVerification/",{email:values.email,code:values.code},false)
             
             dispatch({type:"res__succeed",payload:""}) 
             dispatch({type:"res__error",payload:""}) 

             return setResetPassword(true)
            }catch(err){
              
              dispatch({type:"res__succeed",payload:""})
            
               return dispatch({type:"res__error",payload:err.response.data.message}) 

            }
          }
          
            try{
                await setPost("http://localhost:8080/api/auth/forgotPassword/sendResetPasswordCode/client",{email:values.email},false)
                 dispatch({type:"res__error",payload:""}) 
                return dispatch({type:"res__succeed",payload:'The verification Email is sent'})  
              
            }catch(err){
              dispatch({type:"res__succeed",payload:""})  

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
          <Label htmlFor="email">
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
          <Label htmlFor="verification-code">
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
          <Label htmlFor="password">
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
          <Label htmlFor="confirm-password">
           Confirm Password
          </Label>
         <Input 
         type="password"
         name="confirm"
         placeholder="confirm"
         id="confirm"
         value={values.confirm}
         onChange={handleChange}
         onBlur ={handleBlur}
         error={values.password!==values.confirm && values.confirm}
         disabled={!resetPassword}
         required
         />
         {values.password!==values.confirm &&values.confirm?<InputErr>Wrong Password</InputErr>:null}
           </InputWrapper>
           <PrimaryBtn type="submit" name="change password">
                 Submit
           </PrimaryBtn>
         </Form>
         </>
      )
}
export default ForgotPassword;