const  ImageKit  = require("@imagekit/nodejs");
const { URLEndpoints } = require("@imagekit/nodejs/resources/accounts/url-endpoints.js");

//First of all create imagekit instance
const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  URLEndpoint: process.env.IMAGEKIT_URL,
});
const uploadFile = async (buffer, fileName) => {
  try {
    const result = await imageKit.files.upload({
      file: buffer.toString("base64"), //Convert buffer to base64
      fileName: fileName,
    });
    return result; // Explicitly return the response object from ImageKit
  } catch (error) {
    console.log("ImageKit upload failed",error);
  }
};

module.exports = uploadFile;
