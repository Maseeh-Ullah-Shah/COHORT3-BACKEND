import mongoose from "mongoose";

//Database ko ye batana ki ma jo data store karta ho is DB ma oska structure kaise hain pehle hame ya batana hoga.
//isko hum Schema kehte hain.
const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
    },
    //MongoDB mein hum actual image ke bajaye image ka URL store karte hain.File storage ka kaam ImageKit/Cloudinary karega; MongoDB mein us file ka reference/URL store karenge.
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
//jo be related opertaion agar app karna chahte ho postSchema per to sab sa pehle apko model create karna padega 
const PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
/*
CRUD Operation
C - Create
R - Read
U - Patch 
D - Delete
*/