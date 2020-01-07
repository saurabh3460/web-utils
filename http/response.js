const send = (res, status, msg) => {
  return res
    .status(status)
    .send({ ...msg, status })
    .end();
};

module.exports = {
  send
};
