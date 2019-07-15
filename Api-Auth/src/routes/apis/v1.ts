import userController from '../../controllers/apis/v1/users';
import authController from '../../controllers/apis/v1/auth';

import express from 'express';

let router = express.Router();
router.use('/users', userController);
router.use('/auth', authController);
export default router;