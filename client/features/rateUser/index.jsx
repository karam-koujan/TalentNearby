import * as React from "react";
import RatingStars from "../common/components/ratingStars";
import { Heading } from "./template/heading";
import {Wrapper,Modal} from "./template/layout";
import { ErrMsg } from "./template/text";
import {Form,TextArea,Label,Button} from "./template/form";
import {useFormik} from "formik";
import {useUpdate} from "../../hooks/httpReq/useUpdate";
import {Close} from "./template/icons";
import {useQueryClient} from "react-query";
import { Router, useRouter } from "next/router";
const RateUser = ({userName,profile:{active},userId,...props})=>{
  const [rating,setRating] = React.useState(0)
  const [err,setErr] = React.useState("")
  const setUpdate = useUpdate();
  const queryClient = useQueryClient()
  const router = useRouter()
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
           router.replace("/",undefined,{shallow:true})
        }catch(err){
        console.log(err)
      }
     }
  })
  return(
    <Wrapper>
    <Modal {...props}>
      {err?<ErrMsg>{err}</ErrMsg>:null}
      <Close onClick={()=>router.replace("/",undefined,{shallow:true})}>&#10006;</Close>
        <Heading>
            Rate {userName}
        </Heading>
        <RatingStars margin="0 auto" handleRate={handleRate} enableRating/>
        <Form  onSubmit={handleSubmit}>
          <Label>review</Label>
          <TextArea placeholder="Bio" name="review" value={values.review} onChange={handleChange}/>
        <Button type="submit"  onSubmit={handleSubmit} disabled={!values.review}>Review</Button>
        </Form>
    </Modal>
    </Wrapper>
  )
}

export default RateUser;



