const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const {tokenKey,ownerEmail,ownerPassword} = require("../../config/keys");
const {AuthorizationError} = require("../../utils/errors/authorizationError");
exports.sendVerificationEmailCode = async (email,verificationLink)=>{
    const code = jwt.sign({email},tokenKey,{
      expiresIn:"300s"
    });
    
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",        
        port: 465,            
        auth: {
          user: ownerEmail, 
          pass: ownerPassword, 
        },
        secure:true
      });
    
  return  await transporter.sendMail({
        from: ownerEmail, 
        to: email,
        subject: "user email verification", 
        text: "welcome to my project we are glad that you join to this project for security purposes please click the link to verify our account", // plain text body
        html: `
        <h1 style="color:"black";text-align:center;text-transform:uppercase;">verify Email</h1>
        <p>welcome to my project we are glad that you join to this project for security purposes please click the link to verify our account</p>
        <a href="${verificationLink}/${email}/${code}">click the link to verify email</a>
        `  
      });
    
}

exports.emailVerificationProvider = async(email,code,Model)=>{
  const user = jwt.verify(code,tokenKey)
  return new Promise(async(resolve,reject)=>{
    if(user.email===email){
          await Model.findOneAndUpdate({email},{active:true})
          resolve()
        }
    reject(new AuthorizationError("the email verification is denied try again"))
  })
}