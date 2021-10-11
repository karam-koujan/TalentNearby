const Client = require("../../model/Client");
const Review = require("../../model/Review");
const {calculateDistance} = require("../providers/profile");
exports.getProfile = (req,res)=>{
    res.json({
        user:req.user,
        error:false
    }
    )
}
exports.getProfileById = async(req,res)=>{
    const id = req.params.id ; 
    const profile = req.user;
    try{
        const user = await Client.findById(id)
        const distance = calculateDistance(profile.latitude,user.latitude,profile.longitude,user.longitude)
        user.password = "";
        res.json({
            user:{...user._doc,distance},
            error:false
        })
    }catch{
        res.status(404).json({
            message:`this profile doesn't exist check  ${userName} spelling `,
            error:true
        })
    }
}
exports.getProfileReviews = async(req,res,next)=>{
    const id = req.params.id;
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    const startIndex = (page - 1)*limit;
    try{
      const reviews = await Review.find({talent:id}).populate("reviewer","userName profileImg ").limit(limit).skip(startIndex);
      res.json({
          reviews,
          error:false
      })
    }catch{
        res.status(404).json({
            message:`this profile id does not exist`,
            error:true
        })
    }
}
