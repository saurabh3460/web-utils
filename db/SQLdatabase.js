const Sequelize = require("sequelize");
const {
  HOST,
  PORT,
  USERNAME,
  PASSWORD,
  DATABASE
} = require("../../config/constants");
console.log({ HOST, PORT, USERNAME, PASSWORD, DATABASE });
const SFB = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  dialectOptions: {
    useUTC: true // -->Add this line. for reading from database
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = SFB;
