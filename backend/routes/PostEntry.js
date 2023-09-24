const express = require("express");
const PostModel = require("../model1/PostModel");

const postE = express.Router();

// Define router

postE.post("/api/v1/Admin/post", async (req, res) => {
  try {
    const user = await PostModel.create(req.body);
    res.status(200).send({ status: true, message: "Student created" });
  } catch (error) {
    console.log(error);
  }
});

// read data from collcetion
postE.get("/api/v1/admin/finddata", async (req, res) => {
  try {
    const findData = await PostModel.find();
    res.send(findData);
  } catch (error) {
    console.log(error);
  }
});

// indivisual Student data read
postE.get("/api/v1/admin/studentDetails/:id", async (req, res) => {
  try {
    const findById = await PostModel.findById(req.query.id);
    console.log(findById);
    if (!findById) {
      res.status(401).send();
    } else {
      res.send(findById);
    }
  } catch (e) {
    res.send;
  }
});
// Delete Student data by id

postE.delete("/api/v1/admin/deleteuser/:id", async (req, res) => {
  try {
    const studentDelete = await PostModel.findByIdAndDelete(req.params.id);
    if (studentDelete) {
      res.status(200).send("Deleted");
    }
  } catch (error) {
    res.status(401).send(error);
  }
});
postE.put("/api/v1/admin/update/:id", async (req, res) => {
  try {
    const updateData = await PostModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.send("updateData update successfull");
  } catch (error) {
    console.log(error);
  }
});

module.exports = postE;
