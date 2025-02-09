const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");
const app = express();
dotenv.config();
console.log("error here");
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware for JSON parsing
app.use(express.json());

// Use the user route
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

// Start the server
app.listen(5000, () => {
  console.log("Backend is here");
});
