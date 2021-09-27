const { isUserNameExist } = require("../../auth/providers/signup");
const {ValidationError} = require("../../utils/errors/validationError")


exports.validation = (body,schema)=>{
     
    return new Promise((resolve,reject)=>{
        const {error} =  schema.validate(body); 
        if(error){
          reject(new ValidationError(error.details[0].message))
        }
        resolve() 
   })
}

exports.updateInfo = (id,body,Model)=>{
    return new Promise((resolve,reject)=>{
        Model.findByIdAndUpdate(id,body,(err,user)=>{
                 if(err) return reject()
                 if(!user.active) return reject(new ValidationError('the user email is unverified please verify your email'))
                 return resolve()
        })
    })
}