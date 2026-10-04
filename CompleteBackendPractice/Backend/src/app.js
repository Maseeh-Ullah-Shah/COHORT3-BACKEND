const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/imagekit.service");
const PostModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(cors())
//Middleware for accepting frontend data
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });
//api for creation of post
app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);
    // 1. Guard against missing file uploads
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file provided.",
      });
    }
    // 2. Await the async ImageKit upload execution
    const result = await uploadFile(req.file.buffer, req.file.originalname);
    const newPost = await PostModel.create({
        image:result.url,
        caption:req.body.caption,
        title:req.body.title,
    })
    // 3. Return response with actual ImageKit response object
    return res.status(201).json({
      success: true,
      message: "post created successfully",
      newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload image or create post",
      error: error.message || error,
    });
  }
});
app.get("/posts",async (req,res)=>{
    try {
        const posts = await PostModel.find();
    return res.status(200).json({
        success:true,
        message:"posts Fetched successfully",
        posts
    })
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            message:"Internal server error"
        })
    }
})
module.exports = app;
