import {Router} from 'express';
import { getUserInfo, getUserLocation, loginUser } from '../controllers/user.controller.js';



const userRouter = Router();

userRouter.route("/login").post(loginUser)
userRouter.route("/location/:_id").get(getUserLocation);
userRouter.route("/:_id").get(getUserInfo)


export {userRouter}