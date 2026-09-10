let http = require("http");
console.log(http);
//createServer() ek server create karta hai.
let server = http.createServer((req, res) => {
  //ye function tab execute hota hai jab client request bhejta hai.
  console.log(req.url); //Browser server ko jo information bhejta hai, Node.js us information ko req object mein deta hai.
  console.log("METHOD:", req.method);
  //Browser ko "Ok get it...." response bhej do.
  if (req.url === "/") res.end("Home page");
  else if (req.url === "/users") res.end("User page");
  else if (req.url === "/about") res.end("About page");
  else res.end("Ok get it....."); //Ye woh object hai jiske through server browser ko response bhejta hai.
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
