"use strict";

var catchErrors = function catchErrors(fn) {
  return function (request, response, next) {
    return fn(request, response, next)["catch"](function (e) {
      var _e$message;

      var message = (_e$message = e === null || e === void 0 ? void 0 : e.message) !== null && _e$message !== void 0 ? _e$message : ['Internal Server Error'];

      if (e.response) {
        e.status = e.response.status;
      } else {
        e.status = 500;
      }

      return response.status(e.status).json({
        errors: message
      });
    });
  };
};

var errorHandler = function errorHandler(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({
    msg: err.message
  });
};

module.exports = {
  catchErrors: catchErrors,
  errorHandler: errorHandler
};