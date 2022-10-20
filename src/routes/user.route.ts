import express from "express";
import * as userController from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/", userController.createUser);

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", userController.getSingleUser);

userRouter.put("/:id", userController.updateSingleUser);

userRouter.delete("/:id", userController.deleteSingleUser);

export { userRouter };
