import express from 'express';
import authService from '../../../services/v1/auth/auth';
import validation from '../../../middlewares/validation';

let router = express.Router();

router.post('/register', 
  validation.validateRegistrationBody(), 
  authService.register);

router.post('/login', 
  validation.validateLoginBody(), 
  authService.login);

export default router;