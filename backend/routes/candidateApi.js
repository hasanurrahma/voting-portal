const express = require("express");
const candidateprofile = require("../model1/Candidate");

const candidaterouter = express.Router();

candidaterouter.post("/api/v3/candidateEntry", async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();

    const count = await candidateprofile.count({});

    const generatedNumber = `${currentYear}/${count + 1}`;
    console.log(generatedNumber);
    const user = await candidateprofile.create({
      candidateid: generatedNumber,
      postId1: req.body.postId1,
      postname1: req.body.postname1,
      registartion_no: req.body.registartion_no,
      studentname1: req.body.studentname1,
      studentDept: req.body.studentDept,
      partyname: req.body.partyname,
      partysymbol: req.body.partysymbol,
    });
    console.log(user);
    res.status(200).send({ message: "student created" });
  } catch (error) {
    console.log(error);
  }
});
// --------------fatch candidate details---------------
candidaterouter.get("/api/v3/candidatefatch", async (req, res) => {
  try {
    const findData = await candidateprofile.find();
    res.send(findData);
    console.log(findData);
  } catch (error) {
    console.log(error);
  }
});

candidaterouter.delete("/api/v3/candidatedelete/:id", async (req, res) => {
  try {
    const finddata = await candidateprofile.findByIdAndDelete(req.params.id);
    res.send(finddata);
  } catch (error) {
    console.log(error);
  }

  // votin
});

// voting----

const calledStudents = {};
candidaterouter.put("/api/v2/cast/voting", async (req, res) => {
  try {
    const studentId = req.query.id;

    if (calledStudents[studentId]) {
      return res.status(400).send("This student already voted.");
    }

    const conditions = {
      _id: req.query.pId,
      _id: req.query.vpId, // First condition
      studentname1: req.query.pName,
      studentname1: req.query.vpName, // Second condition (using query string)
    };
    const updates = {
      $inc: { count: 1 },
    };
    const updateData = await candidateprofile.findByIdAndUpdate(
      conditions,
      updates
    );

    if (!updateData) {
      return res.status(404).send("Document not found"); // Handle if the document is not found.
    }
    calledStudents[studentId] = true;

    res.send("updateData update successful");
  } catch (error) {
    console.log(error);
  }
});

module.exports = candidaterouter;
