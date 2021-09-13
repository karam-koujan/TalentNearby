const {isVerificationCodeExist,sendResetPasswordCodeProvider,codeVerificationProvider} = require("../providers/forgotPassword");

exports.sendResetPasswordCode = async(req,res,next)=>{
    const {email} = req.body
    try{
      await isVerificationCodeExist(email)
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