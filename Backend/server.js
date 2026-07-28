const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { default: handleConnectCloudinary } = require("./config/cloudinary");
const { default: userRouter } = require("./routes/userRoutes");
const { default: productRouter } = require("./routes/productRoutes");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
  });

  handleConnectCloudinary()

  app.use('/api/user',userRouter)
  app.use('/api/product',productRouter)
// Test Route


app.get("/", (req, res) => {
  res.send("Server is Running...");
});

// Port
const PORT = process.env.PORT || 3000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});