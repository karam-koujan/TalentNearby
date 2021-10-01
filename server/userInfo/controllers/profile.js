const Client = require("../../model/Client");


exports.getProfile = (req,res)=>{
    res.json({
        user:req.user,
        error:false
    }
    )
}
exports.getProfileById = async(req,res)=>{
    const id = req.params.id ; 
    try{
        const user = await Client.findById(id)
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
