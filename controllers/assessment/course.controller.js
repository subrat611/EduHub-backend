const {
  validateCourseReqBody,
} = require("../../models/assessment/course.model");
const { createNewCourse } = require("../../services/assessment/course.service");

const ApiError = require("../../utils/common/error-response");
const httpStatusCodes = require("../../utils/common/status-codes");
const ApiSuccess = require("../../utils/common/success-response");

class CourseController {
  async createNewCourse(req, res) {
    const { value, error } = validateCourseReqBody(req.body);

    if (error) {
      ApiError.error = error;
      ApiError.message = error.details[0].message;

      return res.status(httpStatusCodes.BAD_REQUEST).json(ApiError);
    }

    try {
      const response = await createNewCourse(value);

      ApiSuccess.message = "Course created successfully";
      ApiSuccess.data = [];

      return res.status(httpStatusCodes.CREATED).json(ApiSuccess);
    } catch (error) {
      ApiError.error = error;
      ApiError.message = error.explanation;
      return res.status(error.statusCode).json(ApiError);
    }
  }
}

const course = new CourseController();

module.exports = course;
