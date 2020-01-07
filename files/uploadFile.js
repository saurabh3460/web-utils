"use strict";
const fs = require("fs").promises;
const { extname } = require("path");
const { FILE_UPLOAD_PATH } = require("../../config/constants");
const status = require("http-status-codes");
const { ErrorRespose } = require("../../utils/http/errors");

const mimeType = {
  "application/pdf": ".pdf",
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg"
};

class UploadFile {
  constructor(fileName, subFolderName, fileObject) {
    this.fileObject = fileObject;
    this.fileName = fileName;
    this.subFolderName = subFolderName;
    this.fileExt = mimeType[fileObject.mime];
    this.uploadPath = this.getUploadPath();
  }
  getUploadPath() {
    return `${FILE_UPLOAD_PATH}/${this.subFolderName}/${this.fileName}${this.fileExt}`;
  }
  async decodeBase64File() {
    let { mime, data } = this.fileObject;
    if (!(mime in mimeType))
      throw new ErrorRespose({
        status: status.BAD_REQUEST,
        message: "Invalid file"
      });
    const response = {};
    response.type = mime;
    response.data = Buffer.from(data, "base64");
    return response;
  }
  async saveFile() {
    try {
      let imagebuffer = await this.decodeBase64File();
      console.log(this.uploadPath);
      fs.writeFile(this.uploadPath, imagebuffer.data, err => {
        if (err) throw err;
        console.log("The binary data has been decoded");
      });
      return this.uploadPath;
    } catch (e) {
      console.log("saveFile", e);
      throw e;
    }
  }
  async removeFIle() {
    await fs.unlink(this.uploadPath);
  }
  static async encodeFile(path) {
    try {
      const data = await fs.readFile(path, { encoding: "base64" });
      const ext = extname(path);
      let mime = "";
      for (const [key, value] of Object.entries(mimeType)) {
        if (value === ext) {
          mime = key;
          break;
        }
      }

      return { mime, data };
    } catch (e) {
      console.log("encodeFile", e);
      throw e;
    }
  }
}
module.exports = {
  UploadFile
};
