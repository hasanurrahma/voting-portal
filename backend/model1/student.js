const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // Existing fields
  sname: String,
  sfather_name: String,
  gender: String,
  dept: String,
  semister: String,
  address: String,
  number: String,
  // New field for the photo file path
  photo: String,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
