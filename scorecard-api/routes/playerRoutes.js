const express = require("express");
const playerController = require("../controllers/playerController");

const router = express.Router();

router.post("/scorecard-api/add/player", playerController.addPlayer);

module.exports = router;