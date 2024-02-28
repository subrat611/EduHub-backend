const Joi = require("joi");
const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Section = mongoose.model("section", sectionSchema);

const validateSectionReqBody = (reqBody) => {
  const schema = Joi.object({
    course_id: Joi.string().required(),
    title: Joi.string().required(),
  });

  return schema.validate(reqBody);
};

module.exports = { Section, validateSectionReqBody };
