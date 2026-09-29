const multer = require("multer");

//Disk Storage for local
// const storageforLocal = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   },
// });

//memory storage
const storageForServer = multer.memoryStorage()

const upload = multer({
  storage:storageForServer,
});
module.exports = upload;
