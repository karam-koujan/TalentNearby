import axios from "axios";
export const useUpload = ()=>{
   const setUpload = async (file,type)=>{
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "Twitter-Clone");
    fd.append("cloud_name", "dnho7tvbq");
    try {
        const { data : {url} } = await axios.post(
            `https://api.cloudinary.com/v1_1/dnho7tvbq/${type}/upload`,
            fd
          );
          return url;
    }catch(err){
        new Error(err)
    }
}
    return setUpload
   
}