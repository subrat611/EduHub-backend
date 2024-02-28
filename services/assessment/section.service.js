const { Section } = require("../../models/assessment/section.model");

const AppError = require("../../utils/errors/app.error")
const httpStatusCodes = require("../../utils/common/status-codes");

const SectionRepository = require("../../repositories/assessment/section.repository")


const sectionRepository = new SectionRepository();

async function createNewSection(data) {
  try {
    const newSection = await sectionRepository.create(data);

    return newSection;
  } catch (error) {
    throw new AppError(
      "Something went wrong while creating new section",
      httpStatusCodes.SERVER_ERROR
    );
  }
}

async function getAllSection(data) {
  try {
    const section = await Section.find({});
    return section;
  } catch (error) {
    throw new AppError(
      "Something went wrong while getting all section",
      httpStatusCodes.SERVER_ERROR
    );
  }
}

module.exports = {
    createNewSection, 
    getAllSection
}
