const vaccinationMonths = {
  1: ["Hepatitis B (HepB)"],
  2: [
    "Hepatitis B (HepB)",
    "Rotavirus (RV)",
    "Diphtheria (DTaP)",
    "Haemophilus influenzae type b (Hib)",
    "Pneumococcal conjugate",
    "Inactivated polivirus"
  ],
  4: [
    "Rotavirus (RV)",
    "Diphtheria (DTaP)",
    "Haemophilus influenzae type b (Hib)",
    "Pneumococcal conjugate",
    "Inactivated polivirus"
  ],
  6: [
    "Hepatitis B (HepB)",
    "Rotavirus (RV)",
    "Diphtheria (DTaP)",
    "Haemophilus influenzae type b (Hib)",
    "Pneumococcal conjugate",
    "Inactivated polivirus",
    "Influenza"
  ],
  9: ["Hepatitis B (HepB)", "Inactivated polivirus", "Influenza"],
  12: [
    "Hepatitis B (HepB)",
    "Haemophilus influenzae type b (Hib)",
    "Pneumococcal conjugate",
    "Inactivated polivirus",
    "Influenza",
    "Measles, Mumps, Rubella (MMR)",
    "Varicella (VAR)",
    "Hepatitis A (HepA)"
  ],
  15: [
    "Hepatitis B (HepB)",
    "Diphtheria (DTaP)",
    "Haemophilus influenzae type b (Hib)",
    "Pneumococcal conjugate",
    "Inactivated polivirus",
    "Influenza",
    "Measles, Mumps, Rubella (MMR)",
    "Varicella (VAR)",
    "Hepatitis A (HepA)"
  ]
};
const Allvaccination = [
  { "Hepatitis B (HepB)": 3 },
  { "Rotavirus (RV)": 3 },
  { "Diphtheria (DTaP)": 4 },
  { "Haemophilus influenzae type b (Hib)": 4 },
  { "Pneumococcal conjugate": 4 },
  { "Inactivated polivirus": 3 },
  { Influenza: 3 },
  { "Measles, Mumps, Rubella (MMR)": 2 },
  "Varicella (VAR)",
  "Hepatitis A (HepA)"
];
let VaccinationMonths = [];
Object.keys(vaccinationMonths).map(key => {
  vaccinationMonths[key].map((vaccination, i) => {
    VaccinationMonths.push({
      month: key,
      vaccination
    });
    return;
  });
  return;
});
const withId = VaccinationMonths.map((key, id) => ({
  id: id + 1,
  ...key,
  createdAt: new Date(),
  updatedAt: new Date()
}));

/*
        {dose : month range in array|number}
HepB: [{ 2: [1, 2] }, { 3: [6, 15] }]
*/
const vaccinations = {
  HepB: [{ 2: [1, 2] }, { 3: [6, 15] }],
  RV: [{ 1: 2 }, { 2: 4 }, { 3: 6 }],
  DTaP: [{ 1: 2 }, { 2: 4 }, { 3: 6 }, { 4: 15 }],
  Hib: [{ 1: 2 }, { 2: 4 }, { 3: 6 }, { 4: [12, 15] }],
  Pcv: [{ 1: 2 }, { 2: 4 }, { 3: 6 }, { 4: [12, 15] }],
  IPV: [{ 1: 2 }, { 2: 4 }, { 3: [6, 15] }],
  // IIV different case
  IIV: [{ 1: 9 }, { 2: 12 }],
  MMR: [{ 1: [12, 15] }],
  VAR: [{ 1: [12, 15] }],
  HepA: [{ 1: [12, 15] }]
};


const fullName = {
  HepB:"Hepatitis B (HepB)",
  RV:"Rotavirus (RV)",
  DTaP:"Diphtheria (DTaP)",
  Hib:"Haemophilus influenzae type B (Hib)",
  Pcv:"Pneumococcal conjugate",
  IPV:"Inactivated polivirus",
  IIV:"Influenza",
  MMR:"Measles, Mumps, Rubella (MMR)",
  VAR:"Varicella (VAR)",
  HepA:"Hepatitis A (HepA)"

}
module.exports = {
  VaccinationMonths: withId,
  Allvaccination,
  vaccinations,
  fullName
};
