const express = require("express");
const upload = require("../config/multer");
const router = express.Router();

router.post("/",upload.single("image"),(req,res)=>{
    try {
        let body = req.body;
        console.log(body);
        console.log(req.file)
        return res.status(200).json({
            message:"file received successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server error"
        })
    }
})
module.exports = router;