"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _middlewares = require("../middlewares");

var _users = _interopRequireDefault(require("../controllers/users"));

var _errorHandlers = require("../handler/errorHandlers");

var router = _express["default"].Router();

router.get('/', _middlewares.authMiddleware.isAuthTokenRevoked, _middlewares.authMiddleware.authenticateToken(), (0, _errorHandlers.catchErrors)(_users["default"].show));
router.get('/users', _middlewares.authMiddleware.isAuthTokenRevoked, _middlewares.authMiddleware.authenticateToken(), (0, _errorHandlers.catchErrors)(_users["default"].users));
router.post('/signup', (0, _errorHandlers.catchErrors)(_users["default"].signup));
router.post('/login', (0, _errorHandlers.catchErrors)(_users["default"].login));
router.put('/change-password', _middlewares.authMiddleware.isAuthTokenRevoked, _middlewares.authMiddleware.authenticateToken(), (0, _errorHandlers.catchErrors)(_users["default"].changePassword));
module.exports = router;