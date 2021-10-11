import Link from "next/link";
import Head from "next/head";
import {MainHeading,SecondaryHeading,Header,FormSection,IntroSection,IntroText,Wrapper,FlexWrapper,PrimaryBtn,SecondaryBtn} from "../../../features/auth/templates";
import SignIn from "../../../features/auth/components/signin";



const Index = ()=>{
 return (
     <>
     <Head>
         <title>
            Client | Sign in 
         </title>
     </Head>
     <Header>
            <span>Logo</span>
        </Header>
     <FlexWrapper>
        <IntroSection style={{"--width":"80%","--margin":"40% 0 0 0"}}>
            <Wrapper>
            <SecondaryHeading>
                welcome to project
            </SecondaryHeading>
            <IntroText>
                find  talented people closer to your house .
            </IntroText>
             <Link href="/auth/signup">
             <SecondaryBtn>
                 Sign Up
             </SecondaryBtn>
             </Link>
            </Wrapper>
        </IntroSection>
        <FormSection>
            <Wrapper style={{"--width":"60%","--margin":"16% 0 0 0"}}>
            <MainHeading>
            Sign in To Project
            </MainHeading>
            <SignIn signinAs="client"/>
            </Wrapper>
        </FormSection>
        </FlexWrapper>
     </>
 )
}

export default Index




