const Joi = require("joi");
const Freelancer =require("../../model/Freelancer");
const Client = require("../../model/Client");
const {signupValidation, isEmailExist, isUserNameExist,createAccount} = require("../providers/signup")
 
exports.freelancerSignup = async(req,res,next)=>{
  const validationSchema = Joi.object({
    userName:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required(), 
    job :Joi.string().required(),
    phoneNumber:Joi.string().required()
 }) 
  const {userName,email} = req.body;
   try{
    await signupValidation(req.body,validationSchema)
    await isEmailExist(email,Freelancer)
    await  isUserNameExist(userName,Freelancer)
    await createAccount(req.body,Freelancer)
    res.status(201).json({message:"the account is created succesffully",error:false})
   }catch(err){
     next(err)
   }
  
}

exports.clientSignup = async(req,res,next)=>{
  const {userName,email,status} = req.body;
  const validationSchema = Joi.object({
    userName:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required(), 
    job :status==="talent"?Joi.string().required():Joi.string(),
    phoneNumber:Joi.string(),
    status: Joi.string(),
    longitude:Joi.number(),
    latitude:Joi.number()
 }) 
  try{
   await signupValidation(req.body,validationSchema)
   await isEmailExist(email,Client)
   await  isUserNameExist(userName,Client)
   await createAccount(req.body,Client)
   res.status(201).json({message:"the account is created succesffully",error:false})
  }catch(err){
    next(err)
  }
}