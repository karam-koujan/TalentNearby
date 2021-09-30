const Client = require("../../model/Client");
const { findUsers } = require("../providers/usersPosition");




exports.usersPosition = async(req,res,next)=>{
   const {nw,ne,sw} = req.body;
   
   try{ 
       const users = await findUsers({nw,ne,sw},Client)
     res.json({
         users
     })
    }catch(err){
       next(err)
   }

}