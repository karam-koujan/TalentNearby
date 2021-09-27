import InfoCard from "./infoCard";
import { useMutation, useQueryClient } from "react-query";
import {usePost} from "../../../hooks/httpReq/usePost";


const NewPositionCard = ({handleCloseCard,data,onMouseEnter,onMouseLeave,lng,lat,...props})=>{
    const setPost = usePost()
    const {mutate,errors} = useMutation(newData=>setPost("http://localhost:8080/api/profile/changePosition",newData))
    const client = useQueryClient()  
    const onSubmit = (data)=>{
        mutate({...data,longitude:lng,latitude:lat})
        client.invalidateQueries('user')

    }
   
    return(
       <InfoCard {...props} disableSubmit={true} onSubmit={onSubmit} errors={errors} data={data}   handleCloseCard={handleCloseCard} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
    )
}

export default NewPositionCard;


 