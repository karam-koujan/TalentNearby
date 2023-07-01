const jwt = require("jsonwebtoken");
const { tokenKey } = require("../config/keys");
const Client = require("../model/Client");
const { AuthorizationError } = require("../utils/errors/authorizationError");
exports.tokenVerification = async (req, res, next) => {
  let token = req.headers.token;
  if (!token.startsWith("Bearer")) {
    return next(new AuthorizationError("invalid token"));
  }
  token = token.substring(7, token.length);
  const { id } = jwt.verify(token, tokenKey);
  try {
    const user = await Client.findById(id);
    user.password = "";
    req.user = user;
    next();
  } catch (err) {
    return next(new AuthorizationError("invalid token"));
  }
};
