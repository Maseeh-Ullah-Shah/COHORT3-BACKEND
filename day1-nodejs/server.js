let http = require("http")   //"Node.js, give me the built-in HTTP module."
// console.log(http)  //Now the variable http gives you access to everything provided by the HTTP module. 

let server = http.createServer((req,res)=>{
    console.log("Hello Bhaiyaaa kaise ho app.........");
    res.end("Ok mane tumhare bat sun le")
});
server.listen(3000,()=>{console.log("server is runing on prot 3000")})