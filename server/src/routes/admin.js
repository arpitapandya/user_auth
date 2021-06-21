import express from 'express';
import { authMiddleware } from 'middlewares';
import adminController from '../controllers/admin';
import { catchErrors } from '../handler/errorHandlers';

const router = express.Router();

router.post(
  '/change-password',
  authMiddleware.isAuthTokenRevoked,
  authMiddleware.authenticateToken(),
  catchErrors(adminController.changePassword),
);

module.exports = router;
