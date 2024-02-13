const Joi = require("joi");
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    course_creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    total_videos: {
      type: Number,
    },
    total_enrolled: {
      type: Number,
    },
    difficulty: {
      type: String,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("course", courseSchema);

const validateCourseReqBody = (reqBody) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    subtitle: Joi.string(),
    description: Joi.string(),
    category: Joi.string().required(),
    image: Joi.string(),
    difficulty: Joi.string().required(),
  });

  return schema.validate(reqBody);
};

module.exports = { Course, validateCourseReqBody };
