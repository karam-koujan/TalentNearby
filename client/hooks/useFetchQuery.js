import { useQuery } from "react-query";
import {useFetch} from "./httpReq/useFetch";



export const useFetchQuery = (query,endPoint)=>{
     const setFetch = useFetch()

     return useQuery(query,()=> setFetch(endPoint))
}