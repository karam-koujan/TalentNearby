const express = require("express");
const router = express.Router();
const {clientSignup} = require("./controllers/signup");
const {clientEmailVerification,sendClientEmailVerification} = require("./controllers/emailVerification");
const {clientLogin} = require("./controllers/login");
const {sendClientResetPasswordCode,codeVerification,resetClientPassword} = require("./controllers/forgotPassword");

router.post("/signup/client",clientSignup)
router.get("/signup/client/:email/:code",clientEmailVerification)
router.post("/login/client",clientLogin)
router.post("/forgotPassword/sendResetPasswordCode/client",sendClientResetPasswordCode)
router.post("/forgotPassword/codeVerification/",codeVerification)
router.post("/forgotPassword/resetPassword/client",resetClientPassword)
router.post("/sendEmailVerification/client",sendClientEmailVerification)

module.exports = router ;