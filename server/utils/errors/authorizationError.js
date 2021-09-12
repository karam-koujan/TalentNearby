

class AuthorizationError extends Error {
    constructor(message){
        super()
     this.message=message;
     this.error = true;
     this.statusCode = 401;
    }

}
exports.AuthorizationError = AuthorizationError