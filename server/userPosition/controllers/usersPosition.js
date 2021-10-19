const Client = require("../../model/Client");
const { findUsers } = require("../providers/usersPosition");




exports.usersPosition = async(req,res,next)=>{
   const {nwLat,nwLng,neLat,neLng,swLat} = req.query;
    const filters = {}
    console.log(req.query)
    for(let key in req.query){
         if(req.query[key]!=="undefined"){
             filters[key] = req.query[key]
         }
    }
    console.log(filters)
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

