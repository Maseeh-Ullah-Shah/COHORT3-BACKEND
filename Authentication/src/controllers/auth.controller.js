const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const register =async (req,res)=>{
    try {
        const {userName,email,password} = req.body;
        const user = await UserModel.create({
            userName,email,password
        });
        const token = jwt.sign({
            id:user._id
        },process.env.JWT_SECRET)
        res.cookie("token",token);
        return res.status(201).json({
            success:true,
            message:"user registered successfully",
            user
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"User not created"
        })
    }
}
module.exports = {register}