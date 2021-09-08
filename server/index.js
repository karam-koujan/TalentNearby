const express = require("express") ;
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser= require("body-parser");
const {dbConnection}  = require("./config/keys");
const app = express();
const auth = require("./auth/route")
const port = process.env.PORT || 3000 ;
mongoose.connect(dbConnection,()=>console.log("connect"))
console.log(dbConnection)
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use("/api/auth",auth)
app.use((err,req,res,next)=>{
    console.log(err)
    const statusCode = err.statusCode || 500
    const errorMessage = err.message || err
    res.status(statusCode).json({
        message:errorMessage,
        error:true
    })
})

app.listen(port,()=>console.log(`the app is listenning in port ${port}`))

module.exports = app ;
