import "dotenv/config";

import app from "./src/app.js";
import connectDB from "./src/config/db.config.js";
//MongoDB ko hum server.js ma connect karenge
connectDB();
//server ko start kar dia es file ma
app.listen(3000, () => {
  console.log(`Server is running on port ${process.env.port}`);
});
