const jwt = require("jsonwebtoken");
const StudentRegis = require("../model1/StudentRegistration");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.secrete_key);

    // Set the Authorization header with the token
    res.setHeader("Authorization", `Bearer ${token}`);

    console.log(verifyUser);
    next();
  } catch (error) {
    res.status(401).send(error);
    console.log(error);
  }
};
module.exports = auth;
