const VerificationCode = require("../../model/VerificationCode");
const {ownerEmail,ownerPassword} = require("../../config/keys");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const {AuthorizationError} = require("../../utils/errors/authorizationError");


exports.isVerificationCodeExist = (email)=>{
  return new Promise((resolve,reject)=>{
    VerificationCode.findOne({email},(err,result)=>{
      if(err) return reject()
      if(result) return reject(new AuthorizationError("the code already sent check your inbox"))
      return resolve()
    })
  })
}
exports.isEmailVerified = (email,Model)=>{
  return new Promise((resolve,reject)=>{
    Model.findOne({email},(err,user)=>{
      if(err) return reject()
      if(user.active) return resolve()
      return reject(new AuthorizationError("the user email is not verified"))
    })
  })
}
exports.sendResetPasswordCodeProvider = async(email)=>{
      const verificationCode = Math.floor(100000 + Math.random() * 900000);
      const verificationCodeDoc = new VerificationCode({email,code:verificationCode})
      await verificationCodeDoc.save()
         

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",        
        port: 465,            
        auth: {
          user: ownerEmail, 
          pass: ownerPassword, 
        },
        secure:true
      });
    
 
   
      return await transporter.sendMail({
        from: ownerEmail, 
        to: email,
        subject: "Password reset code", 
        text: "take the reset password code bellow", 
        html: `
        <h1 style="color:"#19BD33";text-align:center;">Reset Password</h1>
        <p style="font-size:17px;">${verificationCode}</p>
        `  
      });
}

exports.codeVerificationProvider = (body)=>{
  const {email,code} = body ; 
  return new Promise((resolve,reject)=>{
    VerificationCode.findOne({email,code},(err,result)=>{
      if(err) return reject()
      if(!result) return reject(new AuthorizationError("The code is uncorrect or it expires"))
      return resolve()
    })
  })
}


exports.resetPasswordProvider = async(body,Model)=>{
  const {email,password} = body ;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password,salt);
   return new Promise((resolve,reject)=>{
     Model.findOneAndUpdate({email},{password:hash},(err,user)=>{
       if(err) return reject();
       if(!user) return reject(new AuthorizationError("this email doesn't exist"))
       return resolve()
     })
   })    
}