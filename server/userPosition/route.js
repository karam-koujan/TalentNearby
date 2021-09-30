const express = require("express");
const router = express.Router()
const {usersPosition} = require("./controllers/usersPosition");


router.get("/users",usersPosition)

module.exports = router



