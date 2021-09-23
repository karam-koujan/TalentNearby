const {loginValidation,checkUserPassword,generateToken} = require("../providers/login");
const Freelancer = require("../../model/Freelancer");
const Client = require("../../model/Client");
exports.freelancerLogin = async(req,res,next)=>{
  try{ 
      await loginValidation(req.body,next)
     const user = await checkUserPassword(req.body,Freelancer);
     const token = generateToken(user._id)
     res.cookie('token',token)
      res.json({
        message:"login secussfully",
        error:false
    })
    
  }catch(err){
      next(err)
  }
} 

exports.clientLogin = async(req,res,next)=>{
  try{ 
      await loginValidation(req.body,next)
     const user = await checkUserPassword(req.body,Client);
     user.password="";
     const token = generateToken(user._id)
     res.cookie('token',token)
      res.json({
        user,
        token:token,
        error:false
    })
    
  }catch(err){
      next(err)
  }
}