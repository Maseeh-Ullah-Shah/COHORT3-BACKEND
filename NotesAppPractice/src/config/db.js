const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/practiceNotesApp");
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.log("Error while connecting DB", error);
  }
};

module.exports = connectDB;
