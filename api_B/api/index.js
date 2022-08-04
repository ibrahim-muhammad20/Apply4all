const express = require("express");
const cors = require("cors")
const app = express();
const cookieSession=require("cookie-session");
require("./passport");
const passport=require("passport");
app.use(express.urlencoded({
    extended: true
  }));
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const path = require("path");
const formRoute = require("./routes/form");
const multer = require("multer");
app.use("/images", express.static(path.join(__dirname, "/images")));



mongoose.connect("mongodb://localhost/apply", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  // we're connected!
  console.log("We are connected bro/sis ..");
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute);
app.use("/api/form", formRoute);



app.listen("5000", ()=> {
    console.log("backend is running at port 5000")
}
)
