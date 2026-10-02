const express = require("express");
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
const app = express();
//To read json data we use a middleware
app.use(express.json());
//Now integrate route with expreess
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use("/user",userRoutes)
module.exports = app;