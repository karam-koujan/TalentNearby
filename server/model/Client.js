const mongoose = require("mongoose");



const ClientSchema = mongoose.Schema({
  userName : String,
  email : String,
  password:{type:String,min:8},
  country:String,
  address : String,
  longitude :{
    type: Number,
  },
  latitude:{
    type:Number  
  },   
  active:{type:Boolean,default:false},
  creationDate : {type:Date,default:Date.now},
  profileImg:{type:String,default:""}
})


module.exports = mongoose.model("Client",ClientSchema)