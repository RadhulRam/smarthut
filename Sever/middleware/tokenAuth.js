const AsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const CommenHelpers = require("../helpers/commonHelpers");

const clientProtect = AsyncHandler((req, res, next) => {
  console.log("in token");
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, "smartHutRathul@001234@smartHut");
    
     CommenHelpers.findClientById(decoded.userId)
      .then((user) => {
        if (user.email === decoded.email) {
          req.user = user;
          console.log('Auth compileteds');
          next();
        }
      })
      .catch((err) => {
        res.status(401);
        throw new Error("Not authorized, token fail");
      });
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Autherized");
  }
});

module.exports = {
  clientProtect,
};
