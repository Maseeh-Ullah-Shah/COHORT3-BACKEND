const express = require("express");
const connectDB = require("./config/db")
const notesRoute = require("./routes/notes.route");
const NotesModel = require("./models/notes.model");
const app = express();
connectDB();
//Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ok got it");
});

app.use("/notes",notesRoute)

module.exports = app;
