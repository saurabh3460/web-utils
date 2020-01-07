const moment = require("moment");
moment().format("YYYY-MM-DD");

async function getDateInUtc(timeStamp) {
  return moment(timeStamp)
    .utc()
    .toISOString()
    .split("T")[0];
}
module.exports = {
  getDateInUtc
};
