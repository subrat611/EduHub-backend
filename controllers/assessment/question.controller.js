const QuestionModel = require("../../models/assessment/question.model.js");

class Question {
  async getQuestion(req, res) {
    try {
      const questions = await QuestionModel.find({});

      res.status(200).json(questions);
    } catch (error) {
      console.log("Error while fetching all the questions", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  async addQuestion(req, res) {
    try {
      const questionArray = req.body;

      const newQuestions = [];

      for (const questionData of questionArray) {
        const {
          questionType,
          mark,
          questionTitle,
          options,
          correctOption,
          answers,
        } = questionData;

        let newQuestion;

        if (questionType === "short-long-question") {
          newQuestion = new QuestionModel({
            questionTitle,
            questionType,
            mark,
            answers,
          });
        } 
        
        if (questionType === "multiple-choice") {
          newQuestion = new QuestionModel({
            questionTitle,
            questionType,
            options,
            mark,
            correctOption,
          });
        } 

        await newQuestion.save();

        newQuestions.push({
          questionTitle: newQuestion.questionTitle,
          questionType: newQuestion.questionType,
          options: newQuestion.options,
          correctOption: newQuestion.correctOption,
          mark: newQuestion.mark,
          answers: newQuestion.answers,
        });
      }

      return res.status(200).json({
        message: "Questions added successfully",
        newQuestions,
      });
    }
    catch (error) {
      console.log("error in adding question: ", error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
}

const question = new Question();

module.exports = question;

/**
 * Tasks
 * Create API for Add Questions
 *
 * Process
 * 1. Create a function addQuestion
 * 2. Take all the values from req body
 * 3. Create new instance of all the value
 * 4. Save it in db
 */
