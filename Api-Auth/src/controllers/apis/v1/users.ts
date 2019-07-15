import express from 'express';
import userService from '../../../services/v1/users/users';
import authClientRequest from'../../../middlewares/authGaurd';

let router = express.Router();

router.get('/:userId', 
  authClientRequest.authClientToken, 
  userService.getUserDetails
);

export default router;