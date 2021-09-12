const Freelancer =require("../../model/Freelancer");
const Client = require("../../model/Client");
const {freelancerSignupValidation, isEmailExist, isUserNameExist,createAccount} = require("../providers/signup")
const {sendVerificationEmailCode} = require("../providers/emailVerification");
 
exports.freelancerSignup = async(req,res,next)=>{
  const {userName,email} = req.body;
   try{
    await freelancerSignupValidation(req.body,next),
    await isEmailExist(email,Freelancer),
    await  isUserNameExist(userName,Freelancer),
    await createAccount(req.body,next)
    await sendVerificationEmailCode(email,"http://localhost:3000/api/auth/signup/freelancer")
    res.status(201).json({message:"the account is created succesffully",error:false})
   }catch(err){
     next(err)
   }
  
}

exports.clientSignup = async(req,res,next)=>{
  const {userName,email} = req.body;
  try{
   await freelancerSignupValidation(req.body,next),
   await isEmailExist(email,Client),
   await  isUserNameExist(userName,Client),
   await createAccount(req.body,next)
   await sendVerificationEmailCode(email,"http://localhost/api/auth/signup/client")
   res.status(201).json({message:"the account is created succesffully",error:false})
  }catch(err){
    next(err)
  }
}