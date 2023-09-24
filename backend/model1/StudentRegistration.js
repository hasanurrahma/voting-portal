const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const StudentRegistrationScema = new mongoose.Schema(
  {
    Student_Id: {
      type: String,
    },
    Email: {
      type: String,
      unique: true,
    },
    Password: {
      type: String,
    },
    jwtToken: {
      type: String,
    },
    refreshToken: {
      type: String,
    },

    role: {
      type: String,
    },
  },
  { timestamps: true }
);

// StudentRegistrationScema.pre("save", async function (next) {
//   console.log(`the current passord is ${this.Password}`);
//   this.Password = await bcrypt.hash(this.Password, 10);
//   next();
// });

const StudentRegis = new mongoose.model(
  "StudentRegistration",
  StudentRegistrationScema
);

module.exports = StudentRegis;
