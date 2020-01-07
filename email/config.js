"use strict";
const JWT_SECRET =
  "hdusyd83ydyhw8*@&*(^#^JJKhjkhajjda%&^%&*@*(!&()#*_)GKHUKHsee321~$@_+_+";
const Jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const {
  GMAIL_SERVICE_HOST,
  GMAIL_SERVICE_NAME,
  GMAIL_SERVICE_PORT,
  GMAIL_SERVICE_SECURE,
  GMAIL_USER_NAME,
  GMAIL_USER_PASSWORD
} = require("../../config/constants");

const expiresIn = "30m";
module.exports.GmailTransport = nodemailer.createTransport({
  service: GMAIL_SERVICE_NAME,
  host: GMAIL_SERVICE_HOST,
  secure: GMAIL_SERVICE_SECURE,
  port: GMAIL_SERVICE_PORT,
  auth: {
    user: GMAIL_USER_NAME,
    pass: GMAIL_USER_PASSWORD
  }
});

module.exports.generateEmailVerificationToken = async data => {
  return await Jwt.sign(data, JWT_SECRET, { expiresIn });
};

module.exports.verifyEmailToken = async token => {
  try {
    const data = token ? await Jwt.verify(token, JWT_SECRET) : {};
    return data;
  } catch (e) {
    // console.log("verifyEmailToken:", e.message);?
    return false;
  }
};
