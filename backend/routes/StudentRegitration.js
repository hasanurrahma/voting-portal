const express = require("express");
const StudentRegis = require("../model1/StudentRegistration");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser"); // Import the cookie-parser library
const cookie = require("cookie");

// create  a new  router

const router = express.Router();
router.use(cookieParser()); // Use the cookie-parser middleware

// Define router

// router.post("/api/v1/registration", async (req, res) => {
//   try {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     const passwordRegex =
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

//     const { Student_Id, email, password } = req.body;
//     // Validate email using the regular expression
//     const validationErrors = [];
//     if (!req.body.Student_Id) {
//       validationErrors.push("Student id is required.");
//     }

//     if (!emailRegex.test(email)) {
//       validationErrors.push("Invalid Email format");
//     }
//     if (!passwordRegex.test(password)) {
//       validationErrors.push(
//         "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
//       );
//     }

//     res.setHeader("Content-Type", "application/json");

//     if (!(email && password)) {
//       res
//         .status(400)
//         .send({ status: false, message: "email and password required" });
//     }

//     const check = await StudentRegis.findOne({ Email: email });
//     // console.log(check);

//     if (check) {
//       res.status(400).send({ status: false, message: "user already exist." });
//     }
//     // converting password into  hash

//     encryptPass = await bcrypt.hash(password, 10);

//     const newUser = await StudentRegis.create({
//       Student_Id: Student_Id,
//       Email: email,
//       Password: encryptPass,
//     });
//     // generate jwt tokens
//     if (!newUser) {
//       return res
//         .status(500)
//         .send({ status: false, message: "Error creating user" });
//     }

//     const sessionToken = jwt.sign(
//       { userId: newUser._id },
//       "jnjnuhuhhudddsssssssssswww",
//       { expiresIn: "1h" }
//     );

//     const refreshToken = jwt.sign(
//       { userId: newUser._id },
//       "ddfffddswwwwwwwwwdddddddddddd",
//       { expiresIn: "7d" }
//     );

//     newUser.jwtToken = sessionToken;
//     newUser.refreshToken = refreshToken;
//     await newUser.save();

//     res.status(200).json({
//       status: true,
//       message: "Student created",
//       sessionToken,
//       refreshToken,
//     });
//     res.cookie("jwt", refreshToken);

//     // if (user) {
//     //   res.status(200).send({ status: true, message: "Student created" });
//     // }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ status: false, message: "An error occurred" });
//   }
// });
router.post("/api/v1/registration", async (req, res) => {
  try {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    const { Student_Id, email, password } = req.body;
    // Validate email using the regular expression
    const validationErrors = [];
    if (!req.body.Student_Id) {
      validationErrors.push("Student id is required.");
    }

    if (!emailRegex.test(email)) {
      validationErrors.push("Invalid Email format");
    }
    if (!passwordRegex.test(password)) {
      validationErrors.push(
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
      );
    }

    if (!(email && password)) {
      return res
        .status(400)
        .send({ status: false, message: "email and password required" });
    }

    const check = await StudentRegis.findOne({ Email: email });

    if (check) {
      return res
        .status(400)
        .send({ status: false, message: "user already exists." });
    }

    // Convert password into hash
    const encryptPass = await bcrypt.hash(password, 10);

    const newUser = await StudentRegis.create({
      Student_Id: Student_Id,
      Email: email,
      Password: encryptPass,
    });

    if (!newUser) {
      return res
        .status(500)
        .send({ status: false, message: "Error creating user" });
    }

    const sessionToken = jwt.sign(
      { userId: newUser._id },
      process.env.secrete_key,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { userId: newUser._id },
      "ddfffddswwwwwwwwwdddddddddddd",
      { expiresIn: "7d" }
    );

    newUser.jwtToken = sessionToken;
    newUser.refreshToken = refreshToken;
    // Set the cookie before sending the response
    res.cookie("jwt", sessionToken, {
      expires: new Date(Date.now() + 50000),
    });
    console.log(cookie);
    await newUser.save();

    res.status(200).json({
      status: true,
      message: "Student created",
      sessionToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, message: "An error occurred" });
  }
});

// update data of Student
router.put("/api/v1/update/:id", async (req, res) => {
  try {
    const updateData = await StudentRegis.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send("updateData update successfull");
  } catch (error) {
    console.log(error);
  }
});
//  Read data of registered Student
router.get("/api/v1/finddata", async (req, res) => {
  try {
    const findData = await StudentRegis.find();
    res.send(findData);
  } catch (error) {
    console.log(error);
  }
});
// indivisual Student data read
router.get("/api/v1/studentDetails/:id", async (req, res) => {
  try {
    const findById = await StudentRegis.findById(req.query.id);
    console.log(findById);
    if (!findById) {
      res.status(401).send();
    } else {
      res.send(findById);
    }
  } catch (e) {
    res.send();
  }
});
// Delete Student data by id

router.delete("/api/v1/deleteuser/:id", async (req, res) => {
  try {
    const studentDelete = await StudentRegis.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(400).send();
    }
    res.send(studentDelete);
  } catch (error) {
    res.status(401).send(error);
  }
});

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
