import { useMutation, useQueryClient } from "react-query";
import {useUpdate} from "../../../../hooks/httpReq/useUpdate";

import InfoCard from "./infoCard";

const ProfileCard = ({handleCloseCard,data,onMouseEnter,onMouseLeave,...props})=>{
   
    const setUpdate = useUpdate()
    const {mutate,errors} = useMutation(newData=>setUpdate("http://localhost:8080/api/profile/modifyInfo",newData))
    const client = useQueryClient()  

   const onSubmit = (data)=>{
     mutate(data)
     client.invalidateQueries('user')
   }
   

   return(
      <InfoCard {...props} onSubmit={onSubmit} handleCloseCard={handleCloseCard}  data={data} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} errors={errors}/>
   )
}

export default ProfileCard ;