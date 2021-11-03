const Client = require("../../model/Client");
const { findUsers } = require("../providers/usersPosition");
const {calculateDistance} = require("../providers/usersPosition");

exports.usersPosition = async(req,res,next)=>{
   const {nwLat,nwLng,neLat,neLng,swLat} = req.query;
   const distance = calculateDistance(neLat,nwLat,neLng,nwLng);
   const distanceLimit = 80;
    const filters = {}
    console.log(req.query)
    if(distance>distanceLimit){
         return res.json({
             message:"you cannot fetch users far from 80km",
             error:false
         })
    }
    for(let key in req.query){
         if(req.query[key]!=="undefined"){
             filters[key] = req.query[key]
         }
    }
   const bounds = {
       nw : {lat:nwLat,lng:nwLng},
       ne : {lat:neLat,lng:neLng},
       sw : {lat:swLat}
   }   
   try{ 
       const users = await findUsers(bounds,Client,filters)
     console.log(users)
       res.json({
         users
     })
    }catch(err){
       next(err)
   }

}

