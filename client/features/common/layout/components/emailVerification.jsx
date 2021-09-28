import * as React  from "react";
import {Aside} from "../templates/layout";
import {EmailVerificationText, VerifiyEmail} from "../templates/text";
import  {usePost} from  "../../../../hooks/httpReq/usePost";
const EmailVerification = ({email,active})=>{
    const [isEmailSent,setIsEmailSent] = React.useState(false)
    const setPost = usePost();
    const handleClick = ()=>{
          setPost("http://localhost:8080/api/auth/sendEmailVerification/client",{email})
           setIsEmailSent(true)
           console.log(email,active)
    }
    return(
        !active?
        <Aside isEmailSent={isEmailSent}>
            {isEmailSent?(
            <EmailVerificationText >
              the email is sent please check your inbox
            </EmailVerificationText>
            ):(
            <EmailVerificationText >
                your email is not verified, <VerifiyEmail onClick={handleClick}>verify your email</VerifiyEmail>
            </EmailVerificationText>
            )
            }
        </Aside>:null
    )
}


export default EmailVerification ;