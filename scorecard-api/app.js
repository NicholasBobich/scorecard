require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Import routes
const playerRoutes = require("./routes/playerRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Add routes
app.use(playerRoutes);
app.use(courseRoutes);

app.listen(3000, () => {
    console.log("API running on port 3000");
});