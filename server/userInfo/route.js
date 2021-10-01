const express = require("express");
const router = express.Router()
const {getProfile,getProfileById} = require("./controllers/profile");
const {modifyUserInfo, changeUserPosition,rateUser} = require("./controllers/modifyInfo")

router.get("/",getProfile)
router.get("/:id",getProfileById)
   
router.put("/modifyInfo",modifyUserInfo)
router.post("/changePosition",changeUserPosition)

router.put("/rate",rateUser)
module.exports = router