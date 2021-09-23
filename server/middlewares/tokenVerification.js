const jwt = require("jsonwebtoken");
const {AuthorizationError} = require("../utils/errors/authorizationError");
const {tokenKey} = require("../config/keys");
const Client = require("../model/Client");
exports.tokenVerification = async(req,res,next)=>{
    let token = req.headers.token;
    if(!token.startsWith('Bearer')){       
      return  next(new AuthorizationError('invalid token'))
    }
    token = token.substring(7,token.length)  
    console.log(token)
    const {id} = jwt.verify(token,tokenKey)
    console.log(id)
    try{
      const user =  await Client.findById(id)
      user.password=""
      req.user = user
      next()
    
    }catch(err){
        next(new AuthorizationError('invalid token'))
    }
}