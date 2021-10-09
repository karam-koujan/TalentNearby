const Joi = require("joi");
const Client = require("../../model/Client");
const {validation,updateInfo} = require("../providers/modifyInfo");
exports.modifyUserInfo = async (req,res,next)=>{
     const validationSchema = Joi.object({
         phoneNumber : Joi.string(),
         bio : Joi.string().max(100)
     }).or('phoneNumber','bio')
     try{
         await validation(req.body,validationSchema)
         await updateInfo(req.user._id,req.body,Client)
         res.json({
             message:"modified",
             error:false
         })
     }catch(err){
         next(err)
     }
}

exports.changeUserPosition = async (req,res,next)=>{
    const validationSchema = Joi.object({
        phoneNumber : Joi.string(),
        bio : Joi.string().max(100),
        longitude:Joi.number().required(),
        latitude:Joi.number().required()
    }).or('phoneNumber','bio')
    try{
        await validation(req.body,validationSchema)
        await updateInfo(req.user._id,req.body,Client)
        res.json({
            message:"changed position",
            error:false
        })
    }catch(err){
        next(err)
    }
}
