const express = require("express");
const app = express();

let users = [];
//Middleware for accepting json data
app.use(express.json());
//create
app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  res.send("User saved Successfully");
});
//Update
app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let body = req.body;
  let UpdateArray = users.map((val) =>
    val.id === id ? { id, ...body } : val,
  );
  users = UpdateArray;
  res.send(body);
});
//Delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  let userArray = users.filter((user) => user.id !== id);
  users = userArray;
  res.send("user Deleted successfully.......");
});
//get-Read
app.get("/", (req, res) => {
  res.send(users);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
