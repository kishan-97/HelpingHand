const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");
const user = require("../form/user_schema");
const bcrypt = require("bcrypt");
const DB =
  "mongodb+srv://user:pass@432@cluster0.ma553.mongodb.net/hdata?retryWrites=true&w=majority";

mongoose
  .connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Database Connected...."))
  .catch((e) => console.log(e));

Router.post("/register", (req, res) => {
  const { username, phone, email, password } = req.body;

  user.findOne({ email: email }).then(async (userExist) => {
    if (userExist) {
      return res.status(409).json({ code: 409 });
    }
    try {
      const hashpass = await bcrypt.hash(password, 10);
      let new_user = new user({
        username,
        phone,
        email,
        password: hashpass,
        active: false,
      });

      new_user
        .save()
        .then(() =>
          res.status(200).json({ message: "User Succesfully Registered" })
        )
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  });
});

module.exports = Router;
