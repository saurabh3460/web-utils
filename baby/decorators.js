"use strict";
const { send } = require("../../utils/http/response");
const status = require("http-status-codes");
const { getBaby } = require("../../utils/baby/baby");

let BabyDecorator = func => async (req, res, next) => {
  try {
    const baby = await getBaby(req, res);
    if (!baby) return send(res, status.NO_CONTENT, { msg: "No babies found" });
    const response = await func.call({ req, res, baby });
    return send(res, status.OK, response);
  } catch (e) {
    console.log("BabyDecorator", e.message);
    return send(res, e.status, { msg: e.message });
  }
};

module.exports = {
  BabyDecorator
};
