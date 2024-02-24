const express = require("express");

// controller
const course = require("../../controllers/assessment/course.controller");

const router = express.Router();

router.post("/create-new-course", course.createNewCourse);
router.get("/all",course.getAllCourses);

module.exports = router;
