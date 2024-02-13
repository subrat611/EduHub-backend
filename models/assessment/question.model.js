const { model, Schema } = require("mongoose");

const questionScehma = new Schema({
  questionType: {
    type: String,
    enum: ["multiple-choice", "short-long-question"],
    required: true,
  },
  mark: {
    type: Number,
    required: true,
    default: null,
  },
  questionTitle: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: function () {
      return this.questionType === "multiple-choice";
    },
  },
  correctOption: {
    type: String,
    required: function () {
      return this.questionType === "multiple-choice";
    },
  },
  answers: {
    type: String,
    required: function () {
      return this.questionType === "short-long-question";
    },
  },
});

const QuestionModel = model("Question", questionScehma);

module.exports = QuestionModel;
