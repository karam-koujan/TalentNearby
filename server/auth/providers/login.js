const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {authToken} = require("../../config/keys/");
const {StatusError} = require("../../utils/errors/statusError");

exports.loginValidation = (body,next)=>{
  const validationSchema = Joi.object({
      userName:Joi.string().required(),
      email:Joi.string().email().required(),
      password:Joi.string().min(8).required()
  })
 // loginSchema.validateAsync(body).catch(err=>next(new ValidationError(err.details[0].message)))
   return new Promise((resolve,reject)=>{
    const {error} =  validationSchema.validate(body); 
    if(error){
      reject(new StatusError(error.details[0].message).badRequest())
    }
    resolve()
   }) 
}

exports.checkUserPassword = async(body,Model)=>{
  const {userName,email} = body
  return new Promise((resolve,reject)=>{
        Model.findOne({userName,email},(err,user)=>{
          if(err) reject(new StatusError("userName or email or password are wrong").forbidden())
          if(!user.active) reject(new StatusError("your email is unverified please verify your email").forbidden())          
          const isCorrectPassword = bcrypt.compare(user.password,body.password)
          isCorrectPassword.then(result=>result?resolve(user):reject(new StatusError("email or password are wrong").forbidden()))
        })    
  })

}
exports.generateToken = (id)=>{
   const token = jwt.sign({id},authToken);
   return token 
}

