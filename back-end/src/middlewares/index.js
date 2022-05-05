const errorHandler = require('./errorHandler');
const validate = require('./validate');
const userAuthHandler = require('./userAuthHandler');
const adminAuthHandler = require('./adminAuthHandler');

module.exports = {
  errorHandler,
  validate,
  userAuthHandler,
  adminAuthHandler,
};
