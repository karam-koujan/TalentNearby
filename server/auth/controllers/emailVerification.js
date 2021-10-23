const {emailVerificationProvider,sendVerificationEmailCode} = require("../providers/emailVerification");
const Client = require("../../model/Client");



exports.sendClientEmailVerification = async(req,res,next)=>{
     const {email} = req.body;
     try{
          await sendVerificationEmailCode(email,"http://localhost:8080/api/auth/signup/client")
          res.cookie('isEmailVerified',true) 
          return res.json({
               message:"email has been sent",
               error:false
          })
     }catch(err){
          next(err)
     }
}
exports.clientEmailVerification = async(req,res,next)=>{
    const {email,code}  = req.params;
      try{
          await emailVerificationProvider(email,code,Client);
         res.cookie('isEmailVerified',true) 
         return  res.redirect("http://localhost:3000")
    }catch(err){
         next(err)
    }
  }