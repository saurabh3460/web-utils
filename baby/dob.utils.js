const moment = require("moment");
require("moment-precise-range-plugin");
moment().format("YYYY-MM-DD");

class DobUtil {
  constructor(Dob) {
    this.dob = moment(moment(Dob).format("YYYY-MM-DD"));
    // this.dob = moment(this.dob.toISOString().split("T")[0]);
    var today = moment()
      .toISOString()
      .split("T")[0];
    this.monthOfbirth = this.dob.month() + 1;
    this.today = moment();
  }

  async getCurrentMonthFromDob() {
    try {
      if (!moment(this.dob).isValid()) throw Error("invalid date");
      return await moment.preciseDiff(this.today, this.dob, true);
    } catch (e) {
      throw Error(e);
    }
  }
}

module.exports = {
  DobUtil
};
async function main() {
  const date = new DobUtil("2019-01-06");
  const { months, days } = await date.getCurrentMonthFromDob();
  console.log(`${months} months ${days} days`);
}
// main();
