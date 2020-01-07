"use strict";
const { INTEGER, STRING, DATE, DATEONLY, TIME } = require("sequelize");

let id = {
  type: INTEGER,
  autoIncrement: true,
  allowNull: false,
  primaryKey: true
};
let commonStringType = {
  type: STRING,
  allowNull: true,
  trim: true
};

module.exports = {
  id,
  commonStringType
};
