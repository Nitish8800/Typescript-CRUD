import { Response, Request } from "express";
import { controller } from "../config/controller/controller";
import * as userService from "../services/user.services";

export const createUser = controller(
  async (req: Request, res: Response): Promise<void> => {
    const { name, email, age, password, mobile } = req.body;

    const user = await userService.createUser({
      name,
      email,
      age,
      password,
      mobile,
    });
    res.status(200).send({ user });
  }
);

export const getUsers = controller(
  async (req: Request, res: Response): Promise<void> => {
    const users = await userService.getUsers();

    res.status(200).send(users);
  }
);

export const getSingleUser = controller(
  async (req: Request, res: Response): Promise<void> => {
    const _id = req.params.id;
    const user = await userService.getSingleUser(_id);

    res.status(200).send(user);
  }
);

export const updateSingleUser = controller(
  async (req: Request, res: Response): Promise<void> => {
    const _id = req.params.id;
    const { name, age, email, mobile } = req.body;
    const user = await userService.updateSingleUser(_id, {
      name,
      age,
      email,
      mobile,
    });

    res.status(200).send(user);
  }
);

export const deleteSingleUser = controller(
  async (req: Request, res: Response): Promise<void> => {
    const _id = req.params.id;
    const user = await userService.deleteSingleUser(_id);

    res.status(200).send(user);
  }
);
