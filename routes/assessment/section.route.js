const express = require("express");
const section = require("../../controllers/assessment/section.controller.js")

const router = express.Router();

router.get("/get-all-section", (req, res) => {
    section.getAllSection(req, res)
})

router.post("/create-new-section", (req, res) => {
    section.createNewSection(req, res)
})

module.exports = router;