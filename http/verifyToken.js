const jwt = require("jsonwebtoken");
const { INTERNAL_SERVER_ERROR } = require("http-status-codes");

function token(func) {
  return async (...rest) => {
    try {
      return await func(...rest);
    } catch (e) {
      if (e instanceof jwt.TokenExpiredError) throw Error("Token Expired");
      if (e instanceof jwt.JsonWebTokenError) throw Error("Invalid Token");
      console.log("VerifyToken", e);
      throw Error(e.message);
    }
  };
}

async function VerifyToken(token, secret) {
  if (!token || !secret)
    throw Error(!token ? "No token provided" : INTERNAL_SERVER_ERROR);
  const decoded = await jwt.verify(token, secret);
  return decoded;
}

async function GetToken(data, secret) {
  if (!data || !secret) throw Error("Something went wrong");
  return await jwt.sign(data, secret, { expiresIn: "1d" });
}

module.exports = {
  VerifyToken: token(VerifyToken),
  GetToken: token(GetToken)
};
