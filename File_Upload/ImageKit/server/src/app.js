//commonn js
// const express = require("express");

//Now i use ESM module
import dotenv from "dotenv";
import express from "express";
import router from "./routes/post.routes.js";
dotenv.config();
const app = express();
//Middleware for accepting data
app.use(express.json());
app.use("/", router);
app.get("/user",(req,res)=>{
    res.send("Server is working")
})
export default app;
