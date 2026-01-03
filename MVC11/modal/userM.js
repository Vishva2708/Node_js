const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email:{
    type:String
  }
});

const user = mongoose.model("users", userModel);
module.exports = user;