import axios from "axios";
import { useRouter } from "next/router";



export const useUpdate = ()=>{
  const router = useRouter()
    return async(endpoint,data,token=true)=>{
   let headers = {
       'Content-Type':"application/json",
   }
   if(token){
    headers["token"] = localStorage.getItem("token")
}  
return new Promise(async(resolve,reject)=>{
  try{
      const response = await axios.put(endpoint,data,{headers})  
      return resolve(response)
  }catch(err){
      if(err.response.message==="invalid token"){
          return  router.push("/auth/signin")
        }
        return reject(err)
  }

})
   
 } 
}