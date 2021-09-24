import Avatar from "../../common/components/avatar";
import Styles from "../styles/styles.module.css"
import {Wrapper,FormChildWrapper} from "../templates/layout";
import {UserName} from "../templates/text";
import {Form,SelectJob,JobOptions,Label,TextArea,Button} from "../templates/form";
const UserCard = ({userName,profileImg,...props})=>{
   return(
         <Wrapper {...props}>
         <Avatar profileImg={profileImg} size="60px" className={Styles.avatar}/>
         <UserName>
             {userName}
         </UserName>
         <Form>
             <FormChildWrapper>
             <Label>
                 Job
             </Label>
             <SelectJob>
                 <JobOptions>Electricity</JobOptions>
                 <JobOptions>Electricity</JobOptions>
                 <JobOptions>Electricity</JobOptions>
                 <JobOptions>Electricity</JobOptions>
                 <JobOptions>Electricity</JobOptions>
                 <JobOptions>Electricity</JobOptions>
                 <JobOptions>Electricity</JobOptions>
                 <JobOptions>Electricity</JobOptions>
                 <JobOptions>Electricity</JobOptions>

             </SelectJob>
             </FormChildWrapper>
             <FormChildWrapper>
             <Label>
                 Bio
             </Label>
              <TextArea  />
             </FormChildWrapper>
             <Button>
                 Submit
             </Button>
            </Form>
         </Wrapper>
   )
}

export default  UserCard ;