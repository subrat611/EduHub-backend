const express = require("express");
const examController = require("../../controllers/assessment/exam.controller");

const router = express.Router();

router.post("/create-new-exam", examController.createNewExam);
router.get("/all", examController.getallExams);

module.exports = router;
