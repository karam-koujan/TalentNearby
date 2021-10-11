const Client = require("../../model/Client");
const {ValidationError} = require("../../utils/errors/validationError")
const {AuthorizationError} = require("../../utils/errors/authorizationError")

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



exports.updateProfileImg = (image,_id)=>{
      return new Promise((resolve,reject)=>{
        Client.findByIdAndUpdate(_id,{profileImg:image},(err)=>{
            if(err) return reject(new AuthorizationError('profileImg update unauthorized'))
            return resolve()
        }) 
    }) 
}