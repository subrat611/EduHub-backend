const CourseRepository = require("../../repositories/assessment/course.repository");

const httpStatusCodes = require("../../utils/common/status-codes");
const AppError = require("../../utils/errors/app.error");

const courseRepository = new CourseRepository();

async function createNewCourse(data) {
  try {
    const newCourse = await courseRepository.create(data);
    return newCourse;
  } catch (error) {
    throw new AppError(
      "Something went wrong while course creation",
      httpStatusCodes.SERVER_ERROR
    );
  }

 
}
async function getAllCourses(){
  try{
    const Courses= await courseRepository.getAll();
    return Courses;
  }catch(error){
    throw new AppError(
      "An error occurred when trying to retrieve all courses.",
      httpStatusCodes.SERVER_ERROR
    );
  }
}

module.exports = {
  createNewCourse,
  getAllCourses,
};
