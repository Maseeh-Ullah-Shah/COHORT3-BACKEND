const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    title:{
         type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    }
});
const PostModel = mongoose.model("posts",postSchema);
module.exports = PostModel;