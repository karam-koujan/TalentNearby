const express = require("express");
const router = express.Router();
const {rate} = require("./controllers/rate")


router.put("/",rate)




module.exports = router ;