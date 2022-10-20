// type A = number;
// const hh: A = 234;

// console.log(hh);

// interface IUser {
//   name: string;
//   age: number;
//   address: address;
// }

// interface address {
//   street: string;
//   country: string;
//   pin: number;
// }

// type userWithoutName = Omit<IUser, "address"> & { a: string };

// const FASDF: userWithoutName = {
//   a: "test",
//   name: "asfasdf",
//   age: 2,
// };

// function check({ name, age, address }: IUser) {
//   console.log(inc(age));
//   console.log(address.street);
// }

// check({
//   name: "Nitish Kumar",
//   age: 23,
//   address: {
//     street: "Kestopur",
//     country: "India",
//     pin: 110029,
//   },
// });

// function inc(i: number) {
//   return i + i;
// }
