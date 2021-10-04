const Client = require("../../model/Client");
const Review = require("../../model/Review");
const {updateRating, rateUser} = require("../providers/rate");


exports.rate = async(req,res,next)=>{
  const {talentId,rating,text} = req.body;
  const {_id} = req.user ;
 Review.findOne({talent:talentId,reviewer:_id}).populate("talent").exec(async(err,reviewer)=>{
   if(err) return next(err)
    if(reviewer){
     return updateRating({talentRating:reviewer.talent.rating,talentReviewersNum:reviewer.talent.reviewersNum,reviewerRating:reviewer.rating,newReviewerRating:rating},{talentId,_id,text})
      .then(()=>res.json({message:"rating is succussfull",error:false}))
      .catch(err=>next(err))
      }
   return rateUser(rating,{talentId,_id,text})
    .then(()=> res.json({message:"rating is succussfull",error:false}))
    .catch(err=>next(err)) 

    })
    
        
}