const Client = require("../model/Client");


exports.getProfile = (req,res)=>{
    res.json({
        user:req.user,
        error:false
    }
    )
}
exports.getProfileByUserName = async(req,res)=>{
    const userName = req.params.userName ; 
    try{
        const user = await Client.findOne({userName})
        user.password = ""
        res.json({
            user,
            error:false
        })
    }catch{
        res.status(404).json({
            message:`this profile doesn't exist check  ${userName} spelling `,
            error:true
        })
    }
}
