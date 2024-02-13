const Joi = require("joi");
const { mongoose, Schema } = require("mongoose");

const examSchema = new Schema({
  course_code: {
    type: String,
    require: true,
    unique: true,
  },
  course: {
    type: String,
    require: true,
  },
  semester: {
    type: Number,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  max_marks: {
    type: Number,
    require: true,
  },
  exam_rules: {
    type: String,
    require: true,
  },
  start_date: {
    type: Date,
    require: true,
  },
  end_date: {
    type: Date,
    require: true,
  },
});

const examModel = mongoose.model("Exam", examSchema);

const validateExamReqBody = (reqBody) => {
  const schema = Joi.object({
    course_code: Joi.string().required(),
    course: Joi.string().required(),
    semester: Joi.number().integer().positive().min(1).max(8).required(),
    subject: Joi.string().required(),
    max_marks: Joi.number().integer().positive().required(),
    exam_rules: Joi.string(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
  });

  return schema.validate(reqBody);
};

module.exports = { examModel, validateExamReqBody };
