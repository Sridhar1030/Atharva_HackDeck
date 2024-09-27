import {Router} from 'express';
import { getUserLocation, loginUser } from '../controllers/user.controller.js';



const userRouter = Router();

userRouter.route("/login").post(loginUser)
userRouter.route("/location/:_id").get(getUserLocation);


export {userRouter}