const { body } = require("express-validator");
const { validatResult } = require("../../middlewares/user");
const { getFile } = require("../api/readFile");

const GetFile = [
  body("file_path")
    .not()
    .isEmpty()
    .withMessage("File path is requierd"),
  validatResult,
  getFile
];
module.exports = GetFile;
