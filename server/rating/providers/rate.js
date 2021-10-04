const Client = require("../../model/Client");
const Review = require("../../model/Review");



exports.updateRating = async({talentRating,reviewerRating,talentReviewersNum,newReviewerRating},{talentId,_id,text})=>{
    const newRating = talentRating -  (reviewerRating /talentReviewersNum) + (newReviewerRating / talentReviewersNum)  ;
 return new Promise((resolve,reject)=>{
      return  Client.findByIdAndUpdate(talentId,{rating:newRating},async(err,_)=>{
           if(err) return reject(err)
       Review.findOneAndUpdate({talentId,reviewer:_id},{$set:{text,reviewer:_id,talent:talentId,rating:newReviewerRating}},(err,_)=>{
           if(err) return reject()
           resolve()
       })
        return resolve()
        })
})
}



exports.rateUser = async(newReviewerRating,{talentId,_id,text})=>{
    
    Client.findById(talentId,(err,user)=>{
        if(err) return next(err)
        const newRating = Math.round((user.rating +  newReviewerRating) / (user.reviewersNum + 1))
      return new Promise((resolve,reject)=>{
        return  Client.findByIdAndUpdate(talentId,{$set:{rating:newRating},$inc:{reviewersNum:1}},async(err,_)=>{
                if(err) return reject(err)
                const newReview = Review({
                    text,
                    reviewer:_id,
                    talent:talentId,
                    rating:newReviewerRating
                })
              await newReview.save()
              resolve()
            })
      })  
   
    })
}