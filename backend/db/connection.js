const mongoose = require("mongoose");

const db = () => {
  const url = "mongodb://127.0.0.1:27017/student";
  mongoose
    .connect(url, {
      usenewurlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database is connected");
    })
    .catch((e) => {
      console.log("Database is not connected ", e);
    });
};

// const db = mongoose.connection;

module.exports = db;
