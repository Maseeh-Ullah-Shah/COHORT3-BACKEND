import PostModel from "../models/post.model.js";
import { sendFiles } from "../services/storage.service.js";

const createPost = async (req, res) => {
  console.log("1. Controller started");
  let { caption } = req.body;
  let file = req.file;
  console.log("2. File received");
  if (!caption || !file)
    return res.status(400).json({
      success: false,
      message: "Fields are required",
    });
  console.log("3. Before ImageKit");

  const uploadImage = await sendFiles(file.buffer, file.originalname);
  console.log("4. ImageKit response:", uploadImage);

  //lets create post
  const post = await PostModel.create({
    caption,
    image: uploadImage.url,
  });

  console.log("5. MongoDB post created:", post);

  console.log("6. Sending response");

  return res.status(201).json({
    success: true,
    message: "Post created successfully",
    post,
  });
};
export const getAllPost = async (req, res) => {
  try {
    const posts = await PostModel.find();
    return res.status(200).json({
      success:true,
      message:"Posts fetched successfully",
      posts 
    })
  } 
  catch (error)
   {
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};
export default createPost;
