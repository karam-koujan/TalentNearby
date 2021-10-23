const {isVerificationCodeExist,sendResetPasswordCodeProvider,codeVerificationProvider,isEmailVerified,resetPasswordProvider} = require("../providers/forgotPassword");
const Client = require("../../model/Client")


exports.sendClientResetPasswordCode = async(req,res,next)=>{
    const {email} = req.body
    try{
      await isVerificationCodeExist(email)
      await isEmailVerified(email,Client)
      await sendResetPasswordCodeProvider(email)
      return res.json({
          messsage:"the verification code has been sent successfuly",
          error:false
      })
    }catch(err){
        next(err)
    }
}
exports.codeVerification = async(req,res,next)=>{
  try{
        await codeVerificationProvider(req.body)
        return res.json({
            message:"the code is verified",
            error:false
        })
  }catch(err){
      next(err)
  }
}



exports.resetClientPassword = async(req,res,next)=>{
    const {email,password} = req.body;
    try{
        await resetPasswordProvider({email,password},Client)
        return res.json({
            message:"the password has been reseted successfully",
            error:false
        })
    }catch(err){
        next(err)
    }
}