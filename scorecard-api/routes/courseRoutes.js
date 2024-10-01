const express = require("express");
const courseController = require("../controllers/courseController");

const router = express.Router();

router.post("/scorecard-api/add/course", courseController.addCourse);
router.get("/scorecard-api/courses", courseController.getCourses);

module.exports = router;