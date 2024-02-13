const { Course } = require("../../models/assessment/course.model");
const CrudRepository = require("../crud.repository");

class CourseRepository extends CrudRepository {
  constructor() {
    super(Course);
  }
}

module.exports = CourseRepository;
