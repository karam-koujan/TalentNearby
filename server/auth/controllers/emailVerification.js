const {emailVerificationProvider} = require("../providers/emailVerification");
const Freelancer = require("../../model/Freelancer");
const Client = require("../../model/Client");
exports.freelancerEmailVerification = async(req,res,next)=>{
  const {email,code}  = req.params;
    try{
        await emailVerificationProvider(email,code,Freelancer);
       return  res.json({
            message:"the email is verified",
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
         return  res.json({
              message:"the email is verified",
              error:false
          })
    }catch(err){
         next(err)
    }
  }