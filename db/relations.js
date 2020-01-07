"use strict";
const BaseBabyModelPath = "../../models/BabyModal";
const SFB = require("./SQLdatabase");
const { UserPersonal } = require("../../models/user/userPersonal.model"); // user
const Role = require("../../models/RoleModel/role.model");
const UserBaby = require("../../models/user/userBaby");
const UserRole = require("../../models/RoleModel/userRole.model");
require("../../models/mail/mail_list");
const Admin = require("../../models/AdminModel/admin.model");
const AdminRole = require("../../models/AdminModel/adminRole.model");
// baby model
const {
  BabyInformation,
  BabyVaccination,
  BabyCheckup,
  BabyMilestone,
  BabyProfile,
  Lab,
  Prescription,
  ProblemList,
  VisitHistory,
  BabyGrowth,
  BabyDiaperTracker,
  BabySleepTracker,
  BabyDevelopmentStage,
  BabyFeeding
} = require(BaseBabyModelPath + "/index");

// user -> baby
UserPersonal.belongsToMany(BabyInformation, {
  through: UserBaby,
  as: "BabyInformation"
});

// user's role
Role.belongsToMany(UserPersonal, { through: UserRole });
UserPersonal.belongsToMany(Role, { through: UserRole });

// admin's role
Role.belongsToMany(Admin, { through: AdminRole, as: "Admin" });
Admin.belongsToMany(Role, { through: AdminRole });

// baby -> Vaccination
BabyInformation.hasMany(BabyVaccination, {
  as: "Vaccination",
  onDelete: "CASCADE"
});
BabyVaccination.belongsTo(BabyInformation);

// baby -> Feeding
BabyInformation.hasMany(BabyFeeding, {
  as: "Feeding",
  onDelete: "CASCADE"
});
BabyFeeding.belongsTo(BabyInformation);

// baby -> Checkup
BabyInformation.hasMany(BabyCheckup, { as: "Checkup", onDelete: "CASCADE" });
BabyCheckup.belongsTo(BabyInformation);

// baby -> Milestone
BabyInformation.hasMany(BabyMilestone, {
  as: "Milestone",
  onDelete: "CASCADE"
});
BabyMilestone.belongsTo(BabyInformation);

// baby -> Development Tracker
BabyInformation.hasMany(BabyDevelopmentStage, {
  as: "Devstage",
  onDelete: "CASCADE"
});
BabyDevelopmentStage.belongsTo(BabyInformation);

// baby -> Growth
BabyInformation.hasMany(BabyGrowth, { as: "Growth", onDelete: "CASCADE" });
BabyGrowth.belongsTo(BabyInformation);

// baby -> DiaperTracker
BabyInformation.hasMany(BabyDiaperTracker, {
  as: "Diapert",
  onDelete: "CASCADE"
});
BabyDiaperTracker.belongsTo(BabyInformation);

// baby -> SleepTracker
BabyInformation.hasMany(BabySleepTracker, {
  as: "SleepT",
  onDelete: "CASCADE"
});
BabySleepTracker.belongsTo(BabyInformation);

// baby -> babyProfile
BabyInformation.hasOne(BabyProfile, { as: "Profile", onDelete: "CASCADE" });
BabyProfile.belongsTo(BabyInformation);

// babyProfile
[Lab, Prescription, ProblemList, VisitHistory].map(model =>
  BabyInformation.hasMany(model, { onDelete: "CASCADE" })
);
// new RefVaccination();
require("./careGiver.relations");
SFB
  // .sync({ force: true })
  .sync()
  .then(response => {
    console.log("\nMySql Connected");
    return;
  })
  .catch(error => {
    console.log(error);
    throw new Error(error);
  });
