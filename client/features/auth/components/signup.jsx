import * as Yup from "yup";
import {useFormik} from "formik";
import {Form,Input,InputErr,PrimaryBtn,CheckBox,CheckBoxLabel,Label,SignUpPassword,LongLatitude,Email,CheckBoxTitle} from "../templates/";
import Styles from "../templates/style.module.css"



 const SignUp = ()=>{
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    userName:Yup.string().min(3,"userName must have at least 3 letters").max(20,"userName must have at maximum 20").required(),
    email :Yup.string().email("this email is invalid").required(),
    phoneNumber:Yup.string().matches(phoneRegExp,"phone number is invalid").required(),
    longitude:Yup.number().max(180,"longitude value doesn't get greater than 180").min(-180,"longitude value doesn't get less than -180").required(),
    latitude:Yup.number().max(90,"longitude value doesn't get greater than 90").min(-90,"longitude value doesn't get greater than -90").required(),
    password:Yup.string().min(8,"the password should be at least 8").required(),
    client:"",
    talent:"",
    both:""
  })
  const {values,errors,touched,handleBlur,handleChange} = useFormik({
    initialValues:{
      userName:"",
      email :"",
      phoneNumber:"",
      longitude:"",
      latitude:"",
      password:"",
      confirm:"",
      client:"",
      talent:"",
      both:""
    },
    validationSchema,
    onSumbit:()=>{
      
    }
  })
  return(
      <Form>
        <div>
        <Label htmlFor="userName">UserName</Label>
        <Input type="text"
        placeholder="Username" 
        name="userName" 
        id="userName" 
        arial-label="userName" 
        value={values.userName}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.userName&&touched.userName}
        required/>
        {errors.userName&&touched.userName?<InputErr>{errors.userName}</InputErr>:null}
        </div>
         <div>
        <Label htmlFor="email">Email</Label>
        <Email
        type="text" 
        placeholder="Email"
        id="email" 
        name="email" 
        aria-label="email"
        value={values.email}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.email && touched.email}
        required
        />
        {errors.email&&touched.email?<InputErr>{errors.email}</InputErr>:null}
         </div>
        <div className={Styles.inputContainer}>
          <div>
        <Label htmlFor="longitude">longitude</Label>
        <LongLatitude 
        type="number" 
        placeholder="Longitude" 
        id="longitude" 
        name="longitude" 
        arial-label="longitude" 
        max="180" 
        min="-180" 
        value={values.longitude}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.longitude && touched.longitude}
        required/>
          {errors.longitude&&touched.longitude?<InputErr>{errors.longitude}</InputErr>:null}
          </div>
        <div>
        <Label htmlFor="latitude">latitude</Label>
        <LongLatitude 
        type="number" 
        placeholder="Latitude" 
        id="latitude" 
        name="latitude" 
        arial-label="latitude" 
        max="90" 
        min="-90" 
        value={values.latitude}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.latitude && touched.latitude}
        required/>
        {errors.latitude&&touched.latitude?<InputErr>{errors.latitude}</InputErr>:null}
        </div>
        </div>
       
        <div className={Styles.inputContainer}>
          <div>
        <Label htmlFor="passoword">password</Label>
        <SignUpPassword 
        type="password" 
        placeholder="Password" 
        id="password"  
        name="password" 
        arial-label="password"
        value={values.password}
        onChange={handleChange}
        onBlur = {handleBlur}
        error={errors.password && touched.password}
        required/>
        {errors.password&&touched.password?<InputErr>{errors.password}</InputErr>:null}
          </div>
          <div>
        <Label htmlFor="confirm-passowrd"> confirm password</Label>
        <SignUpPassword 
        type="password" 
        placeholder="Confirm" 
        id="confirm-password"  
        name="confirm" 
        arial-label="confirm password"
        onChange={handleChange}
        onBlur = {handleBlur}
        value={values.confirm}
        error={values.password!==values.confirm&&values.confirm!==""&&touched.confirm}
        required/>
        {values.password!==values.confirm&&values.confirm!==""?<InputErr>wrong password</InputErr>:null}
          </div>

        </div>
        <CheckBoxTitle>
          Do you want to create your account as ?
        </CheckBoxTitle>
         <div style={{display:"flex",width:"70%","justifyContent":"space-between"}}>
          <div >
          <CheckBox 
          type="checkbox" 
          id="client"  
          name="client" 
          arial-label="client" 
          value={values.client}
          onChange={handleChange}
          onBlur = {handleBlur}
          disabled={values.talent||values.both}
          />
          <CheckBoxLabel htmlFor="client">client</CheckBoxLabel>
          </div>
          <div >
          <div>
        <CheckBox 
        type="checkbox" 
        id="talent"  
        name="talent" 
        arial-label="talent" 
        value={values.talent}
        onChange={handleChange}
        onBlur = {handleBlur}
        disabled={values.client||values.both}
        />
        <CheckBoxLabel htmlFor="talent">talent</CheckBoxLabel>
        </div>
          </div>
          <div>
          <CheckBox 
          type="checkbox" 
          id="both"  
          name="both" 
          arial-label="both" 
          value={values.both}
          onChange={handleChange}
          onBlur = {handleBlur}
          disabled={values.client||values.talent}
          />
          <CheckBoxLabel htmlFor="both">both</CheckBoxLabel>
        </div>  
        </div>
       
         <PrimaryBtn>
           submit
         </PrimaryBtn>
      </Form>
    
  )
}

export default SignUp;