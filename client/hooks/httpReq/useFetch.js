import axios  from "axios";
import { useRouter } from "next/router";
export const useFetch = ()=>{
    const router = useRouter()
    return async(endPoint,token=true,data)=>{
         const headers = {
            "Content-Type":"application/json"
        }
        if(token){
            headers["token"] = localStorage.getItem("token")
        }
        try{
            const response = await axios.get(endPoint,{headers,params:data});
            return response.data
        }catch(err){
                 if(err.response.message="invalid token"){
                   return  router.push("/auth/signin")
                 }
        }
    }
}