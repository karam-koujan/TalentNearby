import {useLazyQuery} from "./useLazyQuery";
import { useFetch } from "./httpReq/useFetch";




export const useFetchLazyQuery = (query,endPoint,isEnabled)=>{
    const setFetch= useFetch()
    const res  = useLazyQuery(query,()=>setFetch(endPoint),isEnabled)
    if(!isEnabled){
      return {disabledFetching:true}
    }
 
      return {isLoading:res.isLoading,data:res.data}
}