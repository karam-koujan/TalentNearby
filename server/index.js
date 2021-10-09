const express = require("express") ;
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser= require("body-parser");
const cookieParser = require("cookie-parser");
const {dbConnection}  = require("./config/keys");
const app = express();
const auth = require("./auth/route");
const profile = require("./userInfo/route");
const userPosition = require("./userPosition/route");
const rateUser = require("./rating/route");
const search = require("./search/route");
const {tokenVerification,error,isEmailVerified} = require("./middlewares/")
const port = process.env.PORT || 8080 ;
mongoose.connect(dbConnection,()=>console.log("connect"))
console.log(dbConnection)
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json())
app.use("/api/auth",auth)
app.use("/api/profile",tokenVerification,profile)
app.use("/api/position",tokenVerification,userPosition)
app.use("/api/rate",tokenVerification,isEmailVerified,rateUser)
app.use("/api/search",tokenVerification,search)
app.use(error)

app.listen(port,()=>console.log(`the app is listenning in port ${port}`))

module.exports = app ;
