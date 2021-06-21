"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _middlewares = require("../middlewares");

var _admin = _interopRequireDefault(require("../controllers/admin"));

var _errorHandlers = require("../handler/errorHandlers");

var router = _express["default"].Router();

router.post('/change-password', _middlewares.authMiddleware.isAuthTokenRevoked, _middlewares.authMiddleware.authenticateToken(), (0, _errorHandlers.catchErrors)(_admin["default"].changePassword));
module.exports = router;