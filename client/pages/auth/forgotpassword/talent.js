import Head from "next/head";
import ForgotPassword from "../../../features/auth/components/forgotPassword";
import {MainHeading, Wrapper} from "../../../features/auth/templates";

const Index = ()=>{
    return(
       <>
       <Head>
           <title>
               Talent | forgot password 
           </title>
       </Head>
       <Wrapper style={{'width':'40%','margin':'0 auto'}}>
       <MainHeading style={{'marginTop':'4rem'}}>
           Forgot Password
       </MainHeading>
       <ForgotPassword forgotpasswordAs="talent"/>
       </Wrapper>
       </>
    )
}

export default Index ;