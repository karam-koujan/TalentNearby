import * as React from "react";
import SignUp  from "../../features/auth/components/signup";
import SEO from "../../features/common/components/SEO/signup";
import {MainHeading,SecondaryHeading,Header,FormSection,IntroSection,IntroText,Wrapper,SecondaryBtn,FlexWrapper} from "../../features/auth/templates/";
import {useRouter} from "next/router";
const Index = ()=>{
  const router = useRouter()
    return(
        <>
       <SEO/>
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
        
             <SecondaryBtn onClick={()=>router.push("/signin")}>
                 Sign In
             </SecondaryBtn>
            </Wrapper>
        </IntroSection>
        </FlexWrapper>
        </>
    )
}


export default Index