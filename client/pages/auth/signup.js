import Link from "next/link";
import {MainHeading,SecondaryHeading,Header,FormSection,IntroSection,IntroText,Wrapper,FlexWrapper,PrimaryBtn,SecondaryBtn} from "../../features/auth/templates/";
import SignUp  from "../../features/auth/components/signup";

const Index = ()=>{
    return(
        <>
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
             <Link href="/auth/signin">
             <SecondaryBtn>
                 Sign In
             </SecondaryBtn>
             </Link>
            </Wrapper>
        </IntroSection>
        </FlexWrapper>
        </>
    )
}


export default Index