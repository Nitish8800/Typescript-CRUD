import * as userService from "../services/user.service";
import { Response, Request } from "express";

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const {name, email, mobile, password,age } = req.body
    const user = await userService.createUser({name, email, mobile, password,age});

    res.send({
      user,
    });
  } catch (error: any) {
    console.log(error.message);
    res.send(error.message)
  }
};

