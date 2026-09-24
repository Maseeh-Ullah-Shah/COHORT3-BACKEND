const { default: mongoose } = require("mongoose");

//connect mongoDB to vs code project
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://maseehullahshah13_db_user:cohort12345@cohortcluster.mjsdfd2.mongodb.net/",
    );
    console.log("MongoDb successfully connected......");
  } catch (error) {
    console.log("error while connection db", error);
  }
};
module.exports = connectDb;