import {Router} from 'express';
import { getUserInfo, getUserLocation, hasVotedUser, loginUser } from '../controllers/user.controller.js';



const userRouter = Router();

userRouter.route("/login").post(loginUser)
userRouter.route("/location/:_id").get(getUserLocation);
userRouter.route("/:_id").get(getUserInfo)
userRouter.route("/has-voted/:_id").put(hasVotedUser);


export {userRouter}