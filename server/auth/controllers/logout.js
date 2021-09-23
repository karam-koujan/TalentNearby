

exports.logout = (req,res)=>{
   res.cookie('token','',{httpOnly:true})
   res.json({
       message:"logout succesfully",
       error:false
   })
}