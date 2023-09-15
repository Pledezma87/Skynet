
import express from 'express';
import { login, createUser } from '../controllers/UserControlller.js';

const userRouter = express.Router()
userRouter.post('/login', login);
userRouter.post('/', createUser);

export default userRouter;