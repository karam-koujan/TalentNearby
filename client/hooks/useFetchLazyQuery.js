import {useLazyQuery} from "./useLazyQuery";
import { useFetch } from "./httpReq/useFetch";



export const useFetchLazyQuery = (query,endPoint,isEnabled,token=true,data)=>{
    const setFetch= useFetch()
    const res  = useLazyQuery(query,()=>setFetch(endPoint,token,data),isEnabled)

    if(!isEnabled){
      return {disabledFetching:true}
    }
 
      return {isLoading:res.isLoading,data:res.data}
}