"use strict";
const fs = require("fs").promises;
const { FILE_UPLOAD_PATH } = require("../../config/constants");
const mimeType = {
  "application/pdf": ".pdf",
  "image/png": ".png",
  "image/jpeg": ".jpg"
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
    response = {};
    if (!mime in this.mimeType) {
      throw new Error("Invalid file");
    }
    response.type = mime;
    response.data = Buffer.from(data, "base64");
    return response;
  }
  async saveFile() {
    try {
      let imagebuffer = await decodeBase64File();
      console.log(this.uploadPath);
      fs.writeFile(this.uploadPath, imagebuffer.data, err => {
        if (err) throw err;
        console.log("The binary data has been decoded");
      });
      return true;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

let getUploadPath = (req, res) => {
  return `${FILE_UPLOAD_PATH}/${req.body.name}_${res.user.id}.jpg`;
};

async function decodeBase64Image(dataString) {
  let matches = await dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};
  if (!matches || matches.length !== 3) {
    throw new Error("Invalid input string");
  }
  response.type = matches[1];
  response.data = await Buffer.from(matches[2], "base64");
  return response;
}

let saveFile = async (path, fileObject) => {
  try {
    let imagebuffer = await decodeBase64File(fileObject);
    console.log(path);
    fs.writeFile(path, imagebuffer.data, err => {
      if (err) throw err;
      console.log("The binary data has been decoded");
    });
    return true;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

async function decodeBase64File(fileObject) {
  let matches = await dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};
  if (!matches || matches.length !== 3) {
    throw new Error("Invalid input string");
  }
  response.type = matches[1];
  response.data = await Buffer.from(matches[2], "base64");
  return response;
}

async function encodeFile(path) {
  try {
    const image = await fs.readFile(path, { encoding: "base64" });
    const encoded = "data:image/jpg;base64," + image;
    return encoded;
  } catch (e) {
    console.log("encodeFile", e);
    throw e;
  }
}

module.exports = {
  decodeBase64Image: decodeBase64Image,
  encodeImageToBase64: encodeFile
};
