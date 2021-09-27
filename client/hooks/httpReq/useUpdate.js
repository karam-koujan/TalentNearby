import axios from "axios";



export const useUpdate = ()=>{
 return async(endpoint,data,token=true)=>{
   let headers = {
       'Content-Type':"application/json",
   }
   if(token){
    headers["token"] = localStorage.getItem("token")
}
    const response = await axios.put(endpoint,data,{headers})  
    return response
 } 
}