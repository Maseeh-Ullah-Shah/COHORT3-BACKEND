const express = require("express");
const authController = require("../controllers/auth.controller")
const router = express.Router();
//Post-/register
router.post("/register",authController.register)
router.get("/test",(req,res)=>{
    console.log("Cookies ",req.cookies);
    res.status(200).json({
        sucess:true,
        message:"Cookies send successfully",
        cookies:req.cookies,
    })
})
module.exports = router;