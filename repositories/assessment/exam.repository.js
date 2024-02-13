const { examModel } = require("../../models/assessment/exam.model");
const CrudRepository = require("../crud.repository");

class ExamRepository extends CrudRepository {
  constructor() {
    super(examModel);
  }

  async getAllExams(skipAmount, limit) {
    const response = examModel.find({}).skip(skipAmount).limit(limit);
    return response;
  }
}

module.exports = ExamRepository;
