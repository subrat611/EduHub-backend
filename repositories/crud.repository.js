const httpStatusCodes = require("../utils/common/status-codes");
const AppError = require("../utils/errors/app.error");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const newData = new this.model(data);
      await newData.save();

      return newData;
    } catch (error) {
      throw new AppError(
        "Something went wrong while resource creating",
        httpStatusCodes.SERVER_ERROR
      );
    }
  }

  async getAll() {
    const response = this.model.find({});
    return response;
  }

  async getById(id) {
    const response = this.model.findById(id);

    // no data found then throw the error
    if (!response) {
      throw new AppError(
        "No resource has been found",
        httpStatusCodes.BAD_REQUEST
      );
    }

    return response;
  }

  // delete
  // update
}

module.exports = CrudRepository;
