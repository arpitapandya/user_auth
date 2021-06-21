"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _argon = _interopRequireDefault(require("argon2"));

var encrypt = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(password) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _argon["default"].hash(password));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function encrypt(_x) {
    return _ref.apply(this, arguments);
  };
}();

var verify = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(encrypted, nonEncrypted) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _argon["default"].verify(encrypted, nonEncrypted);

          case 2:
            if (!_context2.sent) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", true);

          case 4:
            return _context2.abrupt("return", false);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function verify(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  encrypt: encrypt,
  verify: verify
};