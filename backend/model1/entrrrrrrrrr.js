const mongoose = require("mongoose");
const validator = require("validator");

const StuEntryScema = new mongoose.Schema(
  {
    Student_name: {
      type: String,
      require: [true, "Student name should be required"],
    },
    Fathers_name: {
      type: String,
    },
    Gender: {
      type: String,
    },
    Semester: {
      type: String,
    },
    Department: {
      type: String,
      require: true,
    },
    registration_number: {
      type: String,
    },
    Address: {
      type: String,
    },
    Contact_no: {
      type: String,
    },
    photo: {
      type: String,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PostDetails",
    },
  },
  { timestamps: true }
);

const UserProfile = new mongoose.model(
  "StudentEntrywwwwwwwwwww",
  StuEntryScema
);

module.exports = UserProfile;
