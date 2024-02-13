const ExamRepository = require("../../repositories/assessment/exam.repository");
const httpStatusCodes = require("../../utils/common/status-codes");
const AppError = require("../../utils/errors/app.error");
const dateFns = require("date-fns");

const examRepository = new ExamRepository();

async function createNewExam(data) {
  try {
    // const {
    //   course_code,
    //   course,
    //   semester,
    //   subject,
    //   max_marks,
    //   exam_rules,
    //   start_date,
    //   end_date,
    // } = data;

    const newExam = await examRepository.create(data);

    return newExam;
  } catch (error) {
    throw new AppError(
      "Something went wrong while exam creation",
      httpStatusCodes.SERVER_ERROR
    );
  }
}

async function getAllExams(page, limit) {
  try {
    page = Number(page);
    limit = Number(limit);
    /**
     * page = 1
     * limit = 10
     *
     * then as per the formula
     * 1 - 1 * 10 = 0
     *
     * the list is start from 0
     *
     * and .limit(limit) where limit is 10
     * i.e start from 0 and ending at 10
     */
    const skipAmount = (page - 1) * limit;

    const exams = await examRepository.getAllExams(skipAmount, limit);
    return exams;
  } catch (error) {
    throw new AppError(
      "Something went wrong while fetching exams",
      httpStatusCodes.SERVER_ERROR
    );
  }
}

module.exports = {
  createNewExam,
  getAllExams,
};
