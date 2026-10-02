import mongoose from "mongoose";

//The only logic is written inside this file (how to connect our local server to cluster)
const connectDB = async () => {
  try {
    //awit is liye zarore hain kunki hamara local server or cluster apas ma connect honge aik dosre sa through internet isliye hum pata nahi chalta ki os ma kitna time lagega is ma
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected successfully......");
  } catch (error) {
    console.log("Error while connection MongoDB", error);
  }
};
export default connectDB;
