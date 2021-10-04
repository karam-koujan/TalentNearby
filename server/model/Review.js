const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;


const ReviewSchema = mongoose.Schema({
  text:String,
  rating:Number,
  reviewer:{type:ObjectId,ref:"Client"},
  talent: {type:ObjectId,ref:"Client"}
})


module.exports = mongoose.model("Review",ReviewSchema)