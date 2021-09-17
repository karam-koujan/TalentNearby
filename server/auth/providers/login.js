const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {tokenKey} = require("../../config/keys/");
const {AuthorizationError} = require("../../utils/errors/authorizationError");
const {ValidationError} = require("../../utils/errors/validationError");
exports.loginValidation = (body,next)=>{
  const validationSchema = Joi.object({
      userName:Joi.string().required(),
      email:Joi.string().email().required(),
      password:Joi.string().min(8).required()
  })
   return new Promise((resolve,reject)=>{
    const {error} =  validationSchema.validate(body); 
    if(error){
      reject(new ValidationError(error.details[0].message))
    }
    resolve()
   }) 
}

exports.checkUserPassword = async(body,Model)=>{
  const {userName,email} = body;
  return new Promise((resolve,reject)=>{
   
        Model.findOne({userName,email},(err,user)=>{
          if(err) return reject()
          if(!user) return  reject(new AuthorizationError("userName or email or password are wrong"))
          const isCorrectPassword = bcrypt.compare(body.password,user.password)
          isCorrectPassword.then(result=>result?resolve(user):reject(new AuthorizationError("email or password are wrong")))
        })
  })

}
exports.generateToken = (id)=>{
   const token = jwt.sign({id},tokenKey);
   return token 
}

