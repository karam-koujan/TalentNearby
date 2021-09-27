const express = require("express");
const router = express.Router()
const {getProfile,getProfileByUserName} = require("./controllers/profile");
const {modifyUserInfo, changeUserPosition} = require("./controllers/modifyInfo")

router.get("/",getProfile)
router.get("/:userName",getProfileByUserName)
   
router.put("/modifyInfo",modifyUserInfo)
router.post("/changePosition",changeUserPosition)


module.exports = router