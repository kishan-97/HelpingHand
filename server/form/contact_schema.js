const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  msg: String,
});

module.exports = mongoose.model("Contact", schema);
