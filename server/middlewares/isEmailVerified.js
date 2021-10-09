const  {AuthorizationError} = require("../utils/errors/authorizationError");




exports.isEmailVerified = (req,res,next)=>{
 const {active} = req.user ;
 if(!active){
    return  next(new AuthorizationError('please verify your email'))
 }
 next()
}







