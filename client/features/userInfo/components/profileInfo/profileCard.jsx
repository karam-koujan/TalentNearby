import { useMutation, useQueryClient } from "react-query";
import {useUpdate} from "../../../../hooks/httpReq/useUpdate";

import InfoCard from "./infoCard";

const ProfileCard = ({handleCloseCard,data,onMouseEnter,onMouseLeave,...props})=>{
   
    const setUpdate = useUpdate()
    const mutation = useMutation(newData=>setUpdate("http://localhost:8080/api/profile/modifyInfo",newData))
    const client = useQueryClient()  

   const onSubmit = (data)=>{
     mutation.mutate(data)
     client.invalidateQueries('user')
   }
   

   return(
      <InfoCard {...props} onSubmit={onSubmit} handleCloseCard={handleCloseCard}  data={data} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
   )
}

export default ProfileCard ;