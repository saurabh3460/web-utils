"use strict";
const hbs = require("nodemailer-express-handlebars");
const { GmailTransport } = require("./config");
const { GMAIL_USER_NAME, SERVER_HOST } = require("../../config/constants");

async function sendEmailVerification(user) {
  try {
    GmailTransport.use(
      "compile",
      hbs({
        viewEngine: {
          extName: ".hbs",
          partialsDir: "views/email",
          layoutsDir: "views/",
          defaultLayout: "layout.hbs"
        },
        viewPath: "views/email",
        extName: ".hbs"
      })
    );
    console.log(user);
    let HelperOptions = {
      from: `"Annanta Baby" ${GMAIL_USER_NAME}`,
      to: user.email,
      subject: "Email varification",
      template: "emailTemplate",
      context: {
        name: user.name,
        email: user.email,
        link: `${SERVER_HOST}/${user.route}/${user.token}`
        // title: user.gender === "male" ? "Mr." : "Mrs."
      }
    };

    const info = await GmailTransport.sendMail(HelperOptions);
    // console.log("Message sent", info);
  } catch (e) {
    console.log("sendEmailVerification :", e);
  }

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

module.exports = sendEmailVerification;
