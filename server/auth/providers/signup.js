const {ValidationError} = require("../../utils/errors/validationError");
const Freelancer = require("../../model/Freelancer");
const bcrypt = require("bcryptjs")

exports.signupValidation = (body,validationSchema)=>{

  return new Promise((resolve,reject)=>{
   const {error} =  validationSchema.validate(body); 
   if(error){
     reject(new ValidationError(error.details[0].message))
   }
   resolve()
  }) }

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
exports.createAccount = async(body,Model)=>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(body.password,salt);
    body.password = hash
    const freelancer = new Model({...body})
    await freelancer.save()
  
   }
