const VerificationCode = require("../../model/VerificationCode");
const {ownerEmail,ownerPassword} = require("../../config/keys");
const nodemailer = require("nodemailer");
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