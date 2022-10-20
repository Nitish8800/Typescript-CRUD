export interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
  mobile: number;
  lastUpdatePasswordDate: Date | null;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  age?: number;
  mobile?: number;
}

export interface IUserCreate extends Omit<IUser, "lastUpdatePasswordDate"> {}
