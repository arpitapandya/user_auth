"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _jsonwebtoken = require("jsonwebtoken");

var generateAuthToken = function generateAuthToken(userId) {
  return "bearer ".concat((0, _jsonwebtoken.sign)({
    userId: userId
  }, process.env.JWT_SECRET));
};

var generateToken = function generateToken(userId) {
  return (0, _jsonwebtoken.sign)({
    userId: userId
  }, process.env.JWT_SECRET);
};

var isAuthTokenRevoked = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var authToken;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authToken = req.headers.authorization;

            if (authToken) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(401).send('Unauthorized'));

          case 3:
            next();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function isAuthTokenRevoked(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var authenticateToken = function authenticateToken() {
  return _passport["default"].authenticate('jwt', {
    session: false
  });
};

module.exports = {
  generateAuthToken: generateAuthToken,
  generateToken: generateToken,
  isAuthTokenRevoked: isAuthTokenRevoked,
  authenticateToken: authenticateToken
};