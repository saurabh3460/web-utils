"use strict";
const { UploadFile } = require("../files/uploadFile");
const status = require("http-status-codes");
const { send } = require("../http/response");

async function getFile(req, res) {
  try {
    const { file_path } = req.body;
    console.log("file_path", file_path);
    let data = await UploadFile.encodeFile(file_path);
    if (data.mime && data.data) return send(res, status.OK, { data });
    return send(res, status.BAD_REQUEST, { msg: "No file found" });
  } catch (e) {
    console.log("getFile", e.message);
    return send(res, status.INTERNAL_SERVER_ERROR, { msg: "Please try again" });
  }
}

module.exports = {
  getFile
};
