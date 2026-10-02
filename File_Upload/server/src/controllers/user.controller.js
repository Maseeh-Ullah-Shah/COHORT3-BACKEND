const createController = (req, res) => {
  console.log("Hello Bhaya , Kaise ho app");
  console.log(req.body);
  res.send("EveryThing is working fine")
};

module.exports = { createController };
