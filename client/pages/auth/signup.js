import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import {MainHeading,SecondaryHeading,Header,FormSection,IntroSection,IntroText,Wrapper,Model,Warning,FlexWrapper,PrimaryBtn,SecondaryBtn} from "../../features/auth/templates/";
import SignUp  from "../../features/auth/components/signup";

const Index = ()=>{
    const [show,setShow] = React.useState(false)
    return(
        <>
        <Head>
            <title>
             Sign up
            </title>
        </Head>
        <Header>
            <span>Logo</span>
        </Header>
        <FlexWrapper>
        <FormSection>
            <Wrapper style={{"--width":"60%","--margin":"10% 0 0 0"}}>
            <MainHeading>
            create new account !
            </MainHeading>
              <SignUp/>
            </Wrapper>
          
        </FormSection>
        <IntroSection style={{"--width":"80%","--margin":"40% 0 0 0"}}>
            <Wrapper>
            <SecondaryHeading>
                welcome to project
            </SecondaryHeading>
            <IntroText>
                find client and talented people closer to your house .
            </IntroText>
         <Model condition={show}>
             <Link href="/auth/signin/talent">             
             <p>talent</p>
             </Link>
             <Link href="/auth/signin/client">             
             <p>client</p>
             </Link>
         </Model>
             <SecondaryBtn onClick={()=>setShow(!show)}>
                 Sign In
             </SecondaryBtn>
            </Wrapper>
        </IntroSection>
        </FlexWrapper>
        </>
    )
}


export default Index