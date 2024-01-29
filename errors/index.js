const BadRequest = require("./BadRequest");
const CustomAPIError = require("./CustomAPIError");
const NotFound = require("./NotFound");
const UnauthenticatedError = require("./UnauthenticatedError");

module.exports = {
  CustomAPIError,
  BadRequest,
  UnauthenticatedError,
  NotFound,
};
