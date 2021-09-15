import {Form,Input,PrimaryBtn,CheckBox,CheckBoxLabel,Label,SignUpPassword,LongLatitude,CheckBoxTitle} from "../templates/";


const SignUp = ()=>{
  return(
      <Form>
        <Label for="userName">UserName</Label>
        <Input type="text" placeholder="Username" name="userName" id="userName" arial-label="userName" required/>
        <Label for="email">Email</Label>
        <Input type="email" placeholder="Email" id="email" name="Email" arial-label="Email" required/>
        <Label for="address">Address</Label>
        <Input type="address" placeholder="Address(optional)" id="address" name="address" arial-label="address" required/>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Label for="longitude">longitude</Label>
        <LongLatitude type="number" placeholder="Longitude" id="longitude" name="longitude" arial-label="longitude" max="180" min="-180" required/>
        <Label for="latitude">latitude</Label>
        <LongLatitude type="number" placeholder="Latitude" id="latitude" name="latitude" arial-label="latitude" max="90" min="-90" required/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Label for="passowrd">password</Label>
        <SignUpPassword type="password" placeholder="Password" id="password"  name="password" arial-label="password" />
        <Label for="confirm-passowrd"> confirm password</Label>
        <SignUpPassword type="password" placeholder="Confirm" id="confirm-password"  name="confirm password" arial-label="confirm password" />
        </div>
        <CheckBoxTitle>
          Do you want to create your account as ?
        </CheckBoxTitle>
         <div style={{display:"flex",width:"70%","justifyContent":"space-between"}}>
          <div >
          <CheckBox type="checkbox" id="client"  name="client" arial-label="client" />
          <CheckBoxLabel for="client">client</CheckBoxLabel>
          </div>
          <div >
          <div>
        <CheckBox type="checkbox" id="talent"  name="talent" arial-label="talent" />
        <CheckBoxLabel for="talent">talent</CheckBoxLabel>
        </div>
          </div>
          <div>
          <CheckBox type="checkbox" id="both"  name="both" arial-label="both" />
          <CheckBoxLabel for="both">both</CheckBoxLabel>
        </div>  
        </div>
       
         <PrimaryBtn>
           submit
         </PrimaryBtn>
      </Form>
    
  )
}

export default SignUp ;