const express = require("express");
const Router = express.Router();

const mongoose = require("mongoose");
const contact = require("../form/contact_schema");

const DB =
  "mongodb+srv://user:pass@432@cluster0.ma553.mongodb.net/hdata?retryWrites=true&w=majority";

mongoose
  .connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Database Connected...."))
  .catch((e) => console.log(e));

Router.post("/contactus", (req, res) => {
  const { first_name, last_name, email, msg } = req.body;
  console.log(req.body);
  let Contactus = new contact({ first_name, last_name, email, msg });

  Contactus.save()
    .then((info) => res.status(200).json({ code: 200 }))
    .catch((e) => {
      console.log(e);
      return res.status(442).json({ code: 442 });
    });
});

module.exports = Router;
