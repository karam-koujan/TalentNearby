const express = require("express");
const router = express.Router();
const {freelancerSignup,clientSignup} = require("./controllers/signup");
const {freelancerEmailVerification,clientEmailVerification} = require("./controllers/emailVerification");
router.post("/signup/freelancer",freelancerSignup)
router.get("/signup/freelancer/:email/:code",freelancerEmailVerification)

router.post("/signup/client",clientSignup)
router.get("/signup/client/:email/:code",clientEmailVerification)
module.exports = router ;
