import {Router, Request, Response} from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const router = Router();

router.get('/index', authMiddleware, UserController.index);


router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);




export default router;