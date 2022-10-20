import exp from "constants";
import { IUserCreate, IUserUpdate } from "../models/user.model";
import { User } from "../models/userSchema";

export const createUser = (userData: IUserCreate) => {
  const user = new User({ ...userData });
  return user.save();
};

export const getUsers = async () => {
  return await User.find();
};

export const getSingleUser = async (input: string) => {
  const user = await User.findById(input);

  return user;
};

export const updateSingleUser = async (input: string, data: IUserUpdate) => {
  const user = await User.findByIdAndUpdate(input, data, { new: true });

  return user;
};

export const deleteSingleUser = async (input: string) => {
  const user = await User.findByIdAndDelete(input);

  return user;
};

export const findUserByEmail = async (email: string) => {
  const user = await User.findOne({ email });
  return user;
};
