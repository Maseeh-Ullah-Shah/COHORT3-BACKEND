const express = require("express");
const cors = require("cors")
const connectDB = require("./config/db")
const notesRoute = require("./routes/notes.route");
const NotesModel = require("./models/notes.model");
const app = express();
connectDB();
//Middleware
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173"
}));
app.get("/", (req, res) => {
  res.send("Ok got it");
});

app.use("/notes",notesRoute)

module.exports = app;
