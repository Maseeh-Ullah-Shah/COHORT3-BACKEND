const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const UserModel = require("./model/userModel");

const app = express();

//middleware to accept data from frontend to backend
app.use(express.json());
connectDb();
//get
app.get("/", (req, res) => {
  res.send("done");
});
app.post("/create", async (req, res) => {
  let { name, email, contact } = req.body;
  const newNote = await UserModel.create({
    name,
    email,
    contact,
  });
  res.send(newNote);
});
module.exports = app;
