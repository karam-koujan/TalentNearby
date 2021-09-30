const Client = require("../../model/Client");
const { findUsers } = require("../providers/usersPosition");




exports.usersPosition = async(req,res,next)=>{
   const {nwLat,nwLng,neLat,neLng,swLat} = req.query;
   const bounds = {
       nw : {lat:nwLat,lng:nwLng},
       ne : {lat:neLat,lng:neLng},
       sw : {lat:swLat}
   }   
   try{ 
       const users = await findUsers(bounds,Client)
     res.json({
         users
     })
    }catch(err){
       next(err)
   }

}