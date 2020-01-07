class ErrorRespose extends Error {
  constructor({ status, message }) {
    super({ status, message });
    this.message = message;
    this.status = status;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  ErrorRespose
};
