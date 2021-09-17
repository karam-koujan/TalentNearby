const {emailVerificationProvider,sendVerificationEmailCode} = require("../providers/emailVerification");
const Freelancer = require("../../model/Freelancer");
const Client = require("../../model/Client");


exports.sendFreelancerEmailVerification = async(req,res,next)=>{
     const {email} = req.body;
   try{
        await sendVerificationEmailCode(email,"http://localhost:8080/api/auth/signup/freelancer")
        return res.json({
             message:"email has been sent",
             error:false
        })
   }catch(err){
        next(err)
   }
}

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


exports.sendClientEmailVerification = async(req,res,next)=>{
     const {email} = req.body;
     try{
          await sendVerificationEmailCode(email,"http://localhost:8080/api/auth/signup/client")
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
         return  res.json({
              message:"the email is verified",
              error:false
          })
    }catch(err){
         next(err)
    }
  }