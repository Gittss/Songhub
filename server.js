require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const userController = require("./controller/user");

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("App running at : " + process.env.PORT);
});

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (!err) {
      console.log("DB connected");
    } else console.log("DB error : " + err);
  }
);

app.use("/user", userController);
