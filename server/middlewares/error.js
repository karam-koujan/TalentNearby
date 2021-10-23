

exports.error = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const errorMessage = err.message || err
    return res.status(statusCode).json({
        message:errorMessage,
        error:true
    })
}   