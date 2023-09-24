const express = require("express");
const router = express.Router();
const upload = require("./multer-config"); // Include your multer configuration

const Student = require("./models/student");
const api = express.Router();

// API endpoint to handle student creation
api.post("/students", upload.single("photo"), async (req, res) => {
  try {
    const { sname, sfather_name, gender, dept, semister, address, number } =
      req.body;

    const photo = req.file ? req.file.path : ""; // Save the file path

    const newStudent = new Student({
      sname,
      sfather_name,
      gender,
      dept,
      semister,
      address,
      number,
      photo,
    });

    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = api;
