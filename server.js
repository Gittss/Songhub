require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const flash = require("express-flash");
const session = require("express-session");
const passport = require("passport");
const User = require("./models/user");

const initializePassport = require("./controller/passport-config");
initializePassport(
  passport,
  email => User.find((user) => user.email === email),
  id => User.find((user) => user.id === id)
);

var app = express();
app.use(flash());
app.session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUnintialized: false,
});
app.use(passport.initialize());
app.use(passport.session());

app.listen(process.env.PORT, () => {
  console.log("App running at : " + process.env.PORT);
});

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: "true", useUnifiedTopology: "true" },
  (err) => {
    if (!err) {
      console.log("DB connected");
    } else console.log("DB error : " + err);
  }
);

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);
