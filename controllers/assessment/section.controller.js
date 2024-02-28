const {
  validateSectionReqBody,
} = require("../../models/assessment/section.model");
const ApiSuccess = require("../../utils/common/success-response.js");
const {
  createNewSection,
  getAllSection,
} = require("../../services/assessment/section.service.js");
const ApiError = require("../../utils/common/error-response.js");
const httpStatusCodes = require("../../utils/common/status-codes.js");
const {Section} = require("../../models/assessment/section.model")

class SectionController {
  async createNewSection(req, res) {
    const { value, error } = validateSectionReqBody(req.body);

    if (error) {
      ApiError.error = error;
      ApiError.message = error.details[0].message;

      return res.status(httpStatusCodes.BAD_REQUEST).json(ApiError);
    }
    try {
      const response = await createNewSection(value);

      ApiSuccess.message = "Section created successfully";
      ApiSuccess.data = response;

      return res.status(httpStatusCodes.CREATED).json(ApiSuccess);
    } catch (error) {
      ApiError.error = error;
      ApiError.message = error.explanation;
      return res.status(error.statusCode).json(ApiError);
    }
  }

  async getAllSection(req, res) {
    try {
      const section = await Section.find({});

      res.status(200).json(section);
    } catch (error) {
      console.log("Error while fetching all the sections", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}

const section = new SectionController();
module.exports = section;
