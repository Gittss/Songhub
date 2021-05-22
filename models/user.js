const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    reuired: true,
    uppercase: true,
  },
  number: {
    type: Number,
    required: true,
    minlength: 10,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
