const express = require("express");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.routes")
const app = express();
app.use(express.json());
app.use("/notes",notesRoute)

connectDB();
app.get("/",(req,res)=>{
    res.send("Ok got it ")
})
module.exports = app;