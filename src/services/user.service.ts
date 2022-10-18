import { IUserCreate } from "../models/user.model";
import { User } from "../models/userSchema";

export const createUser = (userData: IUserCreate) => {
  const user = new User({ ...userData });
  return user.save();
};
