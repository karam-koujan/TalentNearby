import axios  from "axios"

export const useFetch = ()=>{
    return async(endPoint,token=true)=>{
         const headers = {
            "Content-Type":"application/json"
        }
        if(token){
            headers["token"] = localStorage.getItem("token")
        }
        try{
            const response = await axios.get(endPoint,{headers});
            console.log(response)
            return response.data
        }catch(err){
            console.log(err)
        }
    }
}