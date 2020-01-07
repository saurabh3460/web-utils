const { vaccinations } = require("./model");

const moment = require("moment");
moment().format("YYYY-MM-DD");

async function getVaccinations(Dob) {
  let UpComingVaccinations = [];
  let CurrentVaccinations = [];

  // month passed
  const dob = moment(Dob);
  // const monthOfbirth = dob.month() + 1;
  const today = moment();
  const Month = today.diff(dob, "months");
  // console.log("currentMonth:>", Month);
  // console.log("Month of birth :" + monthOfbirth);

  Object.keys(vaccinations).map(vaccin => {
    // vaccin = HepB
    vaccinations[vaccin].map(dos => {
      let DosNo = Object.keys(dos)[0];
      if (typeof dos[DosNo] === typeof 0) {
        if (Month <= dos[DosNo]) {
          let UpVaccin = {
            name: vaccin,
            start_month: dos[DosNo],
            dos_no: parseInt(DosNo),
            due_date: moment(dob).add(dos[DosNo], "month")
          };
          UpComingVaccinations.push(UpVaccin);
        }
        if (Month === dos[DosNo]) {
          let CuVaccin = {
            name: vaccin,
            dos_no: parseInt(DosNo),
            due_date: moment(dob).add(dos[DosNo], "month")
          };
          CurrentVaccinations.push(CuVaccin);
        }
        // end of typeof dos[DosNo] === typeof 0
      } else {
        if (
          (Month <= dos[DosNo][0] && Month <= dos[DosNo][1]) ||
          (Month >= dos[DosNo][0] && Month <= dos[DosNo][1])
        ) {
          let UpVaccin = {
            name: vaccin,
            dos_no: parseInt(DosNo),
            start_month: dos[DosNo][0],
            due_date: moment(dob).add(dos[DosNo][1], "month")
          };
          UpComingVaccinations.push(UpVaccin);
          if (Month >= dos[DosNo][0]) {
            let CuVaccin = {
              name: vaccin,
              dos_no: parseInt(DosNo),
              due_date: moment(dob).add(dos[DosNo][1], "month")
            };
            CurrentVaccinations.push(CuVaccin);
          }
        }
      }
    });
    return 0;
  });

  return { UpComingVaccinations, CurrentVaccinations, currentMonth: Month };
}

module.exports = getVaccinations;
