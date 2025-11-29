// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


if (process.env.NODE_ENV === "production") {
  
  dotenv.config();
} else {

  dotenv.config({ path: ".env.local" });
}


const PORT = process.env.PORT || 3005;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

if (!MONGO_URI) {
  console.error("⚠️ Error: MONGO_URI no está definida.");
  process.exit(1); 
}


const app = express();


app.use(express.json());


mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to the database!"))
  .catch((err) =>
    console.error(`❌ Unable to connect to database: ${MONGO_URI}`, err)
  );

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio Application" });
});


app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Server started on port ${PORT}.`);
  console.info(`Server URL: http://localhost:${PORT}`);
});

export default app;
