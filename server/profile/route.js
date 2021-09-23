const express = require("express");
const router = express.Router()
const {getProfile,getProfileByUserName} = require("./controllers");


router.get("/",getProfile)
router.get("/:userName",getProfileByUserName)
   




module.exports = router