import * as React from "react";
import * as Yup from "yup";
import Link from "next/link";
import Spinner from "../../common/components/spinner";
import {useFormik} from "formik";
import {useRouter} from "next/router";
import {useMutation,useQueryClient} from "react-query";
import { usePost } from "../../../hooks/httpReq/usePost";
import {isFormValid} from "../helpers/isFormValid";
import {Form,Input,PrimaryBtn,Label,ForgotPass,InputErr,InputWrapper,ServerErr} from "../templates/";




const SignIn = ()=>{
   const  [responseErr,setResponseErr] = React.useState('')   
   const  [isLoading,setIsLoading] = React.useState(false)
  const setPost = usePost();
  const router = useRouter();
  const validationSchema = Yup.object({
    userName:Yup.string().min(3,"userName must have at least 3 letters").max(20,"userName must have at maximum 20").required(),
    email :Yup.string().email("this email is invalid").required(),
    password:Yup.string().min(8,"the password should be at least 8").required(),
   
  })
  
 
  const {values,touched,errors,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
      userName:"",
      email :"",
      password:""
    },
    validationSchema,
    onSubmit:async()=>{
      setIsLoading(true)
    const formData = {
      userName:values.userName,
      email:values.email,
      password:values.password
     }
    try{
      const response = await setPost("http://localhost:8080/api/auth/login/client",formData,false) 
      localStorage.setItem('token',response.data.token) 
      router.push("/")
    }catch(err){
        setResponseErr(err.response.data.message)

        setIsLoading(false)
    }
    
    }
  })
  const isValid = isFormValid(errors);
    return(
        <Form action="" onSubmit={handleSubmit} style={{'--width':'80%','--maxWidth':'400px'}}>
            {responseErr?<ServerErr>{responseErr}</ServerErr>:null}
            <InputWrapper>
            <Label htmlFor="userName">UserName</Label>
            <Input type="text" placeholder="Username" name="userName" id="userName" arial-label="userName" value={values.userName} error={errors.userName&&touched.userName}  onChange={handleChange}
        onBlur={handleBlur} required/>
            {errors.userName&&touched.userName?<InputErr>{errors.userName}</InputErr>:null}
            </InputWrapper>
            <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" id="email" name="email" arial-label="Email"  onChange={handleChange}
        onBlur = {handleBlur}  value={values.email} error={errors.email&&touched.email} required/>
            {errors.email&&touched.email?<InputErr>{errors.email}</InputErr>:null}
            </InputWrapper>
            <InputWrapper>
            <Label htmlFor="passowrd">password</Label>
        <Input type="password" placeholder="Password" id="password"  name="password" arial-label="password"  onChange={handleChange}
        onBlur = {handleBlur}  value={values.password} error={errors.password&&touched.password} required/>
        {errors.password&&touched.password?<InputErr>{errors.password}</InputErr>:null}

          </InputWrapper>
        <Link href={`/auth/forgotpassword/talent`}>
        <ForgotPass>
            Forgot your password ?
        </ForgotPass>
        </Link>
        <PrimaryBtn type="submit" disabled={isValid}>
     {isLoading?<Spinner/>:'sign in'}
        </PrimaryBtn>
        </Form>
    )
}
export default SignIn