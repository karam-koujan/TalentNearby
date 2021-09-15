
import {Form,Input,PrimaryBtn,Label,FormText,ForgotPass} from "../templates/";




const SignIn = ()=>{
    return(
        <Form>
            <Label for="userName">UserName</Label>
            <Input type="text" placeholder="Username" name="userName" id="userName" arial-label="userName" required/>
            <Label for="email">Email</Label>
            <Input type="email" placeholder="Email" id="email" name="Email" arial-label="Email" required/>
            <Label for="passowrd">password</Label>
        <Input type="password" placeholder="Password" id="password"  name="password" arial-label="password" />
        <ForgotPass>
            Forgot your password ?
        </ForgotPass>
        <PrimaryBtn>
            Sign In
        </PrimaryBtn>
        </Form>
    )
}
export default SignIn