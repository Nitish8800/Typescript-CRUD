export interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
  mobile: number;
  lastUpdatePasswordDate: Date | null;
}

export interface IUserCreate extends Omit<IUser, "lastUpdatePasswordDate"> {}
