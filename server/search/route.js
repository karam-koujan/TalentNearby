const express = require("express"); 
const router = express.Router();
const {search_user} = require("./controllers/search");


router.get("/:userName",search_user)

module.exports = router

