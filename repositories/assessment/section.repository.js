const { Section } = require("../../models/assessment/section.model.js");
const CrudRepository = require("../crud.repository.js");

class SectionRepository extends CrudRepository {
  constructor() {
    super(Section);
  }
}

module.exports = SectionRepository;
