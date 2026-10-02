const express = require("express");
const { createController } = require("../controllers/user.controller");
const upload = require("../config/multer.config");

const router = express.Router();

router.post("/create",upload.single("profile_pic"),createController);

module.exports = router;