import mongoose from "mongoose";
import { IUser } from "./user.model";

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  mobile: { type: Number, required: true },
  lastUpdatePasswordDate: { type: Date, default: null },
});

export const User = mongoose.model<IUser>("User", userSchema);
