const Client = require("../../model/Client");
const Review = require("../../model/Review");

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
exports.getProfileReviews = async(req,res,next)=>{
    const id = req.params.id;
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    const startIndex = (page - 1)*limit;
    try{
      const reviews = await Review.find({talent:id}).limit(limit).skip(startIndex);
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
