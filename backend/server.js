const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

// Middleware to parse JSON
app.use(express.json());

// Basic route to test server
app.get("/", (req, res) => {
  res.send("Movie Watchlist Backend is running!");
});

// Port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Connection to MongoDb Error: ", err));
