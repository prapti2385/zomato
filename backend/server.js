// start server
import app from "./src/app.js";
import connectDB from "./config/db.js";
import "dotenv/config";

connectDB();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
