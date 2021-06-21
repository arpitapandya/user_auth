import express from 'express';
import { authMiddleware } from 'middlewares';
import userController from '../controllers/users';
import { catchErrors } from '../handler/errorHandlers';

const router = express.Router();

router.get(
  '/',
  authMiddleware.isAuthTokenRevoked,
  authMiddleware.authenticateToken(),
  catchErrors(userController.show),
);

router.get(
  '/users',
  authMiddleware.isAuthTokenRevoked,
  authMiddleware.authenticateToken(),
  catchErrors(userController.users)
);

router.post('/signup', catchErrors(userController.signup));
router.post('/login', catchErrors(userController.login));

router.put(
  '/change-password',
  authMiddleware.isAuthTokenRevoked,
  authMiddleware.authenticateToken(),
  catchErrors(userController.changePassword),
);

module.exports = router;
