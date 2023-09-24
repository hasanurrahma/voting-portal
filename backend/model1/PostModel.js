const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  Post_Id: {
    type: String,
  },
  Post_Name: {
    type: String,
  },
});

const PostDetails = new mongoose.model("PostDetails", PostSchema);

module.exports = PostDetails;
