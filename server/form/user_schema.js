const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  username: { type: String, required: true },
  phone: Number,
  email: { type: String, required: true },
  password: String,
  active: false,
});

module.exports = mongoose.model("user", user_schema);
