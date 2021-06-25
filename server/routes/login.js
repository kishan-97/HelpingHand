const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");
const user = require("../form/user_schema");
const passport_initialize = require("../utils/passport_initializer");

const passport = require("passport");
const getUserByEmail = async (email) => {
  return await user.findOne({ email: email });
};
const getUserById = async (id) => {
  return await user.findOne({ _id: id });
};
passport_initialize(passport, getUserByEmail, getUserById);

const DB =
  "mongodb+srv://user:pass@432@cluster0.ma553.mongodb.net/hdata?retryWrites=true&w=majority";

mongoose
  .connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Database Connected...."))
  .catch((e) => console.log(e));

Router.post(
  "/login",
  passport.authenticate("local", {
    failureflash: true,
  }),
  (req, res) => {
    res.status(201).json({ code: 201 });
  }
);

module.exports = Router;
