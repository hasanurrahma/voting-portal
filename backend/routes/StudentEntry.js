const express = require("express");
const UserProfile = require("../model1/StudentEntry");
const PostDetails = require("../model1/PostModel");
const NumberCounter = require("../model1/numberCounter");
const mongoose = require("mongoose");
const { restart } = require("nodemon");
// create  a new  studentRouter

const studentRouter = express.Router();

// Define studentRouter

studentRouter.post("/api/v2/createStudent", async (req, res) => {
  try {
    const category = req.body.Department; // Assuming you're passing category in the request body
    const currentYear = new Date().getFullYear();

    // Validate input data
    const validationErrors = [];
    if (!req.body.Student_name) {
      validationErrors.push("Student name is required.");
    }

    if (!req.body.Fathers_name) {
      validationErrors.push("Father's name is required.");
    }

    if (!req.body.Department) {
      validationErrors.push("Dept name is required.");
    }
    if (!req.body.Semester) {
      validationErrors.push("Semester is required.");
    }

    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    const count = await UserProfile.count({ Department: category });
    console.log(count + 1);

    const generatedNumber = `${category}/${currentYear}/${count + 1}`;

    const user = await UserProfile.create({
      Student_name: req.body.Student_name,
      Fathers_name: req.body.Fathers_name,
      Gender: req.body.Gender,
      Semester: req.body.Semester,
      Department: req.body.Department,
      registration_number: generatedNumber,
      Contact_no: req.body.Contact_no,
      Address: req.body.Address,
    });
    console.log(user);
    res.status(200).send({ message: "student created" });
  } catch (error) {
    console.log(error);
  }
});
// indivisual Student data read
studentRouter.get("/api/v2/Student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await UserProfile.findById(_id);
    console.log(response);
    if (!response) {
      return res.status(401).send();
    } else {
      res.send(response);
    }
  } catch (e) {
    console.log(e);
  }
});

// update data of Student
studentRouter.put("/api/v2/update/:id", async (req, res) => {
  try {
    const updateData = await UserProfile.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send("updateData update successfull");
  } catch (error) {
    console.log(error);
  }
});
//  Read data of registered Student
studentRouter.get("/api/v2/finddata", async (req, res) => {
  try {
    const findData = await UserProfile.find();
    res.send(findData);
    console.log(findData);
  } catch (error) {
    console.log(error);
  }
});

// get post details----
studentRouter.get("/api/v2/finddata12", async (req, res) => {
  try {
    const findData = await PostDetails.find();
    res.send(findData);
  } catch (error) {
    console.log(error);
  }
});
// Delete Student data by id

studentRouter.delete("/api/v2/deleteuser/:id", async (req, res) => {
  try {
    const studentDelete = await UserProfile.findByIdAndDelete(req.params.id);
    if (studentDelete) {
      res.status(200).send("deleted");
    }
  } catch (error) {
    res.status(401).send(error);
  }
});

// find candidate details from other collection-----

studentRouter.get("/joined-data", async (req, res) => {
  const post_Id = req.query.postId;
  const studentId = req.query.studentId;

  try {
    const objectId = new mongoose.Types.ObjectId(studentId);
    const postId = new mongoose.Types.ObjectId(post_Id);
    const joinedData = await UserProfile.aggregate([
      {
        $lookup: {
          from: "postdetails", // Name of the second collection
          localField: "post_id",
          foreignField: "post_id",
          as: "joinedData",
        },
      },

      {
        $match: {
          // Student_name: "Riyaz ahmed",
          "joinedData._id": postId,
        },
      },
      {
        $addFields: {
          joinedData: {
            $filter: {
              input: "$joinedData",
              as: "order",
              cond: { $eq: ["$$order._id", postId] },
            },
          },
        },
      },
      {
        $match: {
          // Contact_no: studentId,
          _id: objectId,
        },
      },
      {
        $unwind: "$joinedData",
      },
      {
        $project: {
          _id: 1,
          Student_name: 1,
          Semester: 1,
          Department: 1,
          Contact_no: 1,
          registration_number: 1,
          joinedData: {
            input: "$user_orders",
            _id: 1,
            Post_Name: 1,
            Post_Id: 1,
          },
        },
      },
    ]);

    res.json(joinedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = studentRouter;
