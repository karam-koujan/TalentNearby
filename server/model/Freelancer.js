const mongoose = require("mongoose");


const FreelancerSchema =  mongoose.Schema({
  userName : String,
  email : String,
  password:{type:String,min:8},
  country:String,
  job:String,
  address : String,
  longitude :{
    type: Number,
  },
  latitude:{
    type:Number  
  },   
  bio:{type:String,default:""},
  rating:{type:Number,max:5,min:0,default:0},
  active:{type:Boolean,default:false},
  creationDate : {type:Date,default:Date.now},
  profileImg:{type:String,default:""}
  
})


module.exports = mongoose.model("Freelancer",FreelancerSchema)