const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { username, email, password, role = "user" } = req.body;
  //1).first check user exist or not in MongoDB.....
  const isUserAlreadyExist = await UserModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUserAlreadyExist) {
    return res.status(409).json({
      message: "User already exist",
    });
  }
  //2).if not exist then create a new user and save it in database,
  //   first convert password into hashable format so that attackers cant see actual password
  const hash = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    username,
    email,
    password:hash,
    role,
  });
  //Step 2: Registration ke baad aap JWT banate ho
  const token = jwt.sign(
    {
      id: user._id,  //user._id wahi ID hai jo MongoDB ne registration ke waqt generate ki thi.
      role: user.role,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "User registered Successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
};

const loginUser = async (req,res) => {
    const {username,email,password} = req.body;
    const user = await UserModel.findOne({
        $or:[
            {username},{email}
        ]
    });

    if(!user){
        return res.status(401).json({
            message:"Invalid credentials"
        });

    }

    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid credentials"
        });
    }

    const token = jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET);
    res.cookie("token",token);

    res.status(200).json({
        message:"User logged in successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })
}


const logoutUser = async (req,res) => {
  res.clearCookie("token");
  res.status(200).json({message:"User logged out successfully"})
}

module.exports = {registerUser ,loginUser,logoutUser}