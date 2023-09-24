const mongoose = require("mongoose");

const CandidateScheema = new mongoose.Schema({
  candidateid: {
    type: String,
  },
  postId1: {
    type: String,
  },
  postname1: {
    type: String,
  },
  registartion_no: {
    type: String,
  },
  studentname1: {
    type: String,
  },
  studentDept: {
    type: String,
  },
  partyname: {
    type: String,
  },
  partysymbol: {
    type: String,
  },
  image: {
    type: String,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const candidateprofile = new mongoose.model(
  "candidateprofile",
  CandidateScheema
);
module.exports = candidateprofile;
