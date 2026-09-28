require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("Error in connection to MongoDb", error);
  }
};
module.exports = connectDB;
