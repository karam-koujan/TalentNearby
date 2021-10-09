import * as React from "react";
import RatingStars from "../common/components/ratingStars";
import { Heading } from "./template/heading";
import {Wrapper} from "./template/layout";
import { ErrMsg } from "./template/text";
import {Form,TextArea,Label,Button} from "./template/form";
import {useFormik} from "formik";
import {useUpdate} from "../../hooks/httpReq/useUpdate";
import {Close} from "./template/icons";
import {useQueryClient} from "react-query";
const RateUser = ({userName,profile:{active},userId,handleCloseCard,...props})=>{
  const [rating,setRating] = React.useState(0)
  const [err,setErr] = React.useState("")
  const setUpdate = useUpdate();
  const queryClient = useQueryClient()
  const handleRate = (rating)=>{
       setRating(rating=>rating+1)
       console.log(rating)
  }
  const {values,handleChange,handleSubmit} = useFormik({
     initialValues:{
       review:''
     },
     onSubmit :async()=>{
      try{
           if(!active){
             setErr("please verifiy your email")
           }
           await setUpdate("http://localhost:8080/api/rate/",{text:values.review,talentId:userId,rating})
           queryClient.invalidateQueries(["users",userId])
           queryClient.invalidateQueries(["reviews",userId])
           window.location.reload(false); 

        }catch(err){
        console.log(err)
      }
     }
  })
  return(
    <Wrapper {...props}>
      {err?<ErrMsg>{err}</ErrMsg>:null}
              <Close  onClick={handleCloseCard}>&#10006;</Close>
        <Heading>
            Rate {userName}
        </Heading>
        <RatingStars margin="0 auto" handleRate={handleRate} enableRating/>
        <Form action="" onSubmit={handleSubmit}>
          <Label>review</Label>
          <TextArea placeholder="Bio" name="review" value={values.review} onChange={handleChange}/>
        <Button type="submit"  onSubmit={handleSubmit}>Review</Button>
        </Form>
    </Wrapper>
  )
}

export default RateUser;



