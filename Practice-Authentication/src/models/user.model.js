const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["artist","user"],
        default:"user"
    }
});
const UserModel = mongoose.model("users",userSchema);
module.exports = UserModel;