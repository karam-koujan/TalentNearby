

class StatusError extends Error {
    constructor(message){
        super()
     this.message=message
    }

    forbidden(){
        this.statusCode = 401 
    }
}
exports.StatusError = StatusError