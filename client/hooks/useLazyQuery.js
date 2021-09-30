import {useQuery} from "react-query";
export  function useLazyQuery (key, fn, enabled ,options = {}) {
    const query = useQuery(key, fn, {
      ...options,
      enabled
    })
   if(enabled){
     return  query
   }

   return undefined
  }