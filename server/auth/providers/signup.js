const Joi = require("joi");
const {ValidationError} = require("../../utils/errors/validationError");
const Freelancer = require("../../model/Freelancer");
const bcrypt = require("bcryptjs")

exports.freelancerSignupValidation = (body,next)=>{
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
 return validationSchema.validateAsync(body).catch(err=>next(new ValidationError(err.details[0].message)))
}

exports.isEmailExist = async(userEmail,Model)=>{
  return  new Promise((resolve,reject)=>{
    Model.findOne({email:userEmail}).exec((error,user)=>{
        if(user) reject(new ValidationError("this email is already exist"))
        resolve()

});
       
      })
}
exports.isUserNameExist = async(userName,Model)=>{
   return  new Promise((resolve,reject)=>{
      Model.findOne({userName}).exec((error,user)=>{
          if(user) reject(new ValidationError("this userName is already exist"))
          resolve()
   })
})
}
exports.createAccount = async(body)=>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(body.password,salt);
    body.password = hash
    const freelancer = new Freelancer({...body})
    await freelancer.save()
  
   }
