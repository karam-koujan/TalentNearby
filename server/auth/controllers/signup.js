const Joi = require("joi");
const Freelancer =require("../../model/Freelancer");
const Client = require("../../model/Client");
const {signupValidation, isEmailExist, isUserNameExist,createAccount} = require("../providers/signup")
const {sendVerificationEmailCode} = require("../providers/emailVerification");
 
exports.freelancerSignup = async(req,res,next)=>{
  const validationSchema = Joi.object({
    userName:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required(),
    country:Joi.string().required(),
    job:Joi.string().required(),
    address:Joi.string().required(),
    longitude:Joi.number().required(),
    latitude:Joi.number().required()
       
 }) 
  const {userName,email} = req.body;
   try{
    await signupValidation(req.body,validationSchema)
    await isEmailExist(email,Freelancer)
    await  isUserNameExist(userName,Freelancer)
    await createAccount(req.body)
    await sendVerificationEmailCode(email,"http://localhost:3000/api/auth/signup/freelancer")
    res.status(201).json({message:"the account is created succesffully",error:false})
   }catch(err){
     next(err)
   }
  
}

exports.clientSignup = async(req,res,next)=>{
  const {userName,email} = req.body;
  const validationSchema = Joi.object({
    userName:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required(),
    country:Joi.string().required(),
    address:Joi.string().required(),
    longitude:Joi.number().required(),
    latitude:Joi.number().required()
       
  })
  try{
   await signupValidation(req.body,validationSchema)
   await isEmailExist(email,Client)
   await  isUserNameExist(userName,Client)
   await createAccount(req.body,next)
   await sendVerificationEmailCode(email,"http://localhost:3000/api/auth/signup/client")
   res.status(201).json({message:"the account is created succesffully",error:false})
  }catch(err){
    next(err)
  }
}