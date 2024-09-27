import {Router} from 'express';
import { loginUser } from '../controllers/user.controller.js';



const userRouter = Router();

userRouter.route("/login").post(loginUser)


export {userRouter}