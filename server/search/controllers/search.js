const { isUserNameExist } = require("../../auth/providers/signup");

const Client = require("../../model/Client");


exports.search_user = async(req,res,next)=>{
    const {userName} = req.params;
   const page = parseInt(req.query.page)
   const limit = parseInt(req.query.limit) ;
   const startIndex = (page - 1)*limit
   if(userName === undefined){
      return res.status(400).json({
           error:"bad request"
       })
   }
   const regex = new RegExp(/^\s*$/)
   const isUserNameEmpty = regex.test(userName)
   if(isUserNameEmpty){
    return  res.json({
       profiles : []
     })
   }
   try{
     const profiles = await Client.find({userName : {$regex:`^${userName}` , $options:"xi"},status:"talent"},"userName profileImg  rating").limit(limit).skip(startIndex);
   return  res.json({
         profiles
     })
   }catch(err){
    next(err)
   }
}