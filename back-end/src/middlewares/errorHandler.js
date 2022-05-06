const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('../utils/statusCodes');

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(BAD_REQUEST).json({ message: err.details[0].message });
  }

  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(INTERNAL_SERVER_ERROR).json({ err });
};
