const express = require("express");
const app = express();
let user = [];

//Midddleware jo frontend sa data ko accept karta hai json ki form mein
app.use(express.json());

//create
app.post("/create", (req, res) => {
  let body = req.body;
  user.push(body);
  res.send("User saved successfully.......");
});
//get-Read
app.get("/", (req, res) => {
  res.send(user);
});
//put-Update
app.put("/update/:id",(req,res)=>{
    const {id} = req.params;
    const body = req.body
    console.log(body)
    const updateUser = user.map((val)=>val.id === id ? {...val,...body}:val);
    user= updateUser;
    res.send("User updated successfully.....");
})
//Delete
app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params;
    const userData = user.filter((val)=>val.id !== id);
    user = userData
    res.send("DElete api is triggered successfully")
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
