const express = require("express");
const question = require("../../controllers/assessment/question.controller.js");

const router = express.Router();

router.post("/addquestion", (req, res) => {
  question.addQuestion(req, res);
});

router.get("/allquestion", (req, res) => {
    question.getQuestion(req, res)
})

module.exports = router;
