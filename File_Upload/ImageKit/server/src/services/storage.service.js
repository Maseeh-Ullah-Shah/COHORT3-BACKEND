import { ImageKit , toFile } from "@imagekit/nodejs";
import PostModel from "../models/post.model.js";

const storageInstance = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export const sendFiles = async (file, fileName) => {
  console.log("1. sendFiles started");
  //Ye simply ek JavaScript object hai jisme upload ki required information rakhi ja rahi hai.
  const fileObject = await toFile(file, fileName);
  const obj = {
    file:fileObject,
    fileName,
    folder: "cohort-3",
  };
  console.log("2. About to upload to ImageKit");
  const uploadImage = await storageInstance.files.upload(obj);
  console.log("3. ImageKit upload completed");
  console.log(uploadImage);

  return uploadImage;
};
