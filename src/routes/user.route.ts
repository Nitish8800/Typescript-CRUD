import express from "express";
import * as userController from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post("/", userController.createUser);

export { userRouter };
