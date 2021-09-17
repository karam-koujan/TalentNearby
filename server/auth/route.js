const express = require("express");
const router = express.Router();
const {freelancerSignup,clientSignup} = require("./controllers/signup");
const {freelancerEmailVerification,clientEmailVerification,sendClientEmailVerification,sendFreelancerEmailVerification} = require("./controllers/emailVerification");
const {freelancerLogin,clientLogin} = require("./controllers/login");
const {sendClientResetPasswordCode,codeVerification,sendFreelancerResetPasswordCode,resetClientPassword,resetFreelancerPassword} = require("./controllers/forgotPassword");
router.post("/signup/freelancer",freelancerSignup)
router.get("/signup/freelancer/:email/:code",freelancerEmailVerification)
router.post("/signup/client",clientSignup)
router.get("/signup/client/:email/:code",clientEmailVerification)

router.post("/login/freelancer",freelancerLogin)
router.post("/login/client",clientLogin)

router.post("/forgotPassword/sendResetPasswordCode/client",sendClientResetPasswordCode)
router.post("/forgotPassword/sendResetPasswordCode/freelancer",sendFreelancerResetPasswordCode)
router.post("/forgotPassword/codeVerification",codeVerification)
router.post("/forgotPassword/resetPassword/freelancer",resetFreelancerPassword)
router.post("/forgotPassword/codeVerification/client",resetClientPassword)



router.post('/sendEmailVerification/freelancer',sendFreelancerEmailVerification)
router.post('/sendEmailVerification/client',sendClientEmailVerification)
module.exports = router ;
