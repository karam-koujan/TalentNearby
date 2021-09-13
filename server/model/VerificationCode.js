const mongoose = require("mongoose");


const VerificationCodeSchema = mongoose.Schema({
    email:String,
    code : {type:Number},
    createdAt : {type:Date,default:Date.now()},
    expireAt: {
        type: Date,
        validate: [ function(v) {
            return (v - new Date()) <= 1500000;
        }, 'Cannot expire more than 60 seconds in the future.' ],
        default: function() {
            return new Date(new Date().valueOf() + 1500000);
        }
    }
})
VerificationCodeSchema.index({ expireAt: 15 }, { expireAfterSeconds : 0 });


module.exports = mongoose.model('VerificationCode',VerificationCodeSchema)