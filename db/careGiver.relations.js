"use strict";
const { CareCenter } = require("../../models/CareCenter/CareCenter.model");
// const BabyCare = require("../../models/CareCenter/babyCare.model");
const BabyInformation = require("../../models/BabyModal/baby.modal");
// CareCenter.hasMany(BabyCare, { as: "Baby_Informations", onDelete: "CASCADE" });
CareCenter.hasMany(BabyInformation, {
  as: "BabyInformation",
  onDelete: "NO ACTION"
});
