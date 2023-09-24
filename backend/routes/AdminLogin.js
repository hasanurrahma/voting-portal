const express = require("express");
const StudentRegis = require("../model1/StudentRegistration");
const bcrypt = require("bcrypt"); // Make sure bcrypt is properly imported
var jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const cookie = require("cookie");

// create  a new  router

const login = express.Router();

// Define router

login.post("/api/v1/Candidate/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await StudentRegis.findOne({ Email: email }).exec(); // Execute the query
    if (!useremail) {
      res.send("User not found");
      return;
    }

    console.log(useremail.Password);
    // ------------compare password----------------
    const ismatch = await bcrypt.compare(password, useremail.Password);

    if (!ismatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const sessionToken = jwt.sign(
      { userId: StudentRegis._id },
      process.env.secrete_key,
      { expiresIn: "1h" }
    );
    const refreshToken = jwt.sign(
      { userId: StudentRegis._id },
      "ddfffddswwwwwwwwwdddddddddddd",
      { expiresIn: "7d" }
    );
    useremail.jwtToken = sessionToken;
    useremail.refreshToken = refreshToken;
    res.cookie("jwt", sessionToken, {
      expires: new Date(Date.now() + 50000),
    });
    await useremail.save();
    res.json({ sessionToken, refreshToken });
  } catch (error) {
    console.log(error);
  }
});

login.get("/check", auth, async (req, res) => {
  res.send("hello my name is HASAN");
});

// if (useremail.password === password && useremail.Email === email) {
//   res.status(200).send({ status: true, message: "Student created" });
// }

// login.get("/some-route", (req, res, next) => {
//   // Simulate a custom error
//   const customError = new CustomError(
//     "This is a custom error qwertyuioasdcfvgbhjfg",
//     400
//   );

//   // Pass the error to the next middleware
//   next(customError);
// });

module.exports = login;
