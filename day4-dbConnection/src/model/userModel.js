//Mongoose import-Hum Mongoose ko apne Node.js project mein la rahe hain.

const mongoose = require("mongoose");

//Schema create: "Mujhe User data ka structure/rules define karne hain."
//Ye sirf batata hai form mein kya fields hongi.
let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
});
// Model ek tool/interface hai jiske through hum MongoDB ke data ke saath kaam karte hain.
const UserModel = mongoose.model("UserModel", userSchema);
//UserModel(Leftside):JavaScript variable hai. Is naam ko aap apni convenience ke according rakh sakte hain.
//"UserModel":Mongoose model ka naam hai.
//UserSchema:Schema hai jo batata hai data ka structure kya hoga.
module.exports = UserModel;
