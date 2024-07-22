const express = require("express");
const courseController = require("../controllers/courseController");

const router = express.Router();

router.post("/scorecard-api/add/course", courseController.addCourse);

module.exports = router;