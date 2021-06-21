import express from 'express';

import userRoutes from './users';
import adminRoutes from './admin';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
