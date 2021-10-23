const {loginValidation,checkUserPassword,generateToken} = require("../providers/login");
const Client = require("../../model/Client");

exports.clientLogin = async(req,res,next)=>{
  try{ 
      await loginValidation(req.body,next)
     const user = await checkUserPassword(req.body,Client);
     user.password="";
     const token = generateToken(user._id)
      res.json({
        user,
        token:token,
        error:false
    })
    
  }catch(err){
      next(err)
  }
}