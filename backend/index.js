const express = require("express");
const multer = require("multer");
const path = require("path");
const cookieparser = require("cookie-parser");
const db = require("./db/connection");
const StudentRegis = require("./model1/StudentRegistration");
const UserPrifile = require("./model1/StudentEntry");
const { default: mongoose } = require("mongoose");
const router = require("./routes/StudentRegitration");
const CustomError = require("./middleware/CustomError");

const router1 = require("./routes/AdminLogin");
const studentRouter = require("./routes/StudentEntry");
const PostE = require("./routes/PostEntry");
const candidaterouter = require("./routes/candidateApi");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(cookieparser());
db();
app.use(express.json());
app.use(router);
app.use(router);
app.use(router1);
app.use(studentRouter);
app.use(PostE);
app.use(candidaterouter);
//-------------------------------------------

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10,
  },
});
app.use("/profile", express.static("upload/images"));
app.post("/upload", upload.single("profile"), (req, res) => {
  res.json({
    success: 1,
    profile_url: `http://localhost:3000/profile/${req.file.filename}`,
  });
});

// ------------------------------------------------------------------------------------------------
app.listen(process.env.PORT, () => {
  console.log(`server is running  ${process.env.PORT}`);
});
