require("dotenv").config();
const express = require('express');

// Import routes
const playerRoutes = require("./routes/playerRoutes");

const app = express();

// Middleware
app.use(express.json());

// Add routes
app.use(playerRoutes);

app.listen(3000, () => {
    console.log("API running on port 3000");
});