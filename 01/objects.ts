interface User {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

const user: User = {
  name: "daniel",
  email: "danielasakpa@gmail.com",
  age: 20,
  isActive: true,
};

type UserDetails = { name: string; isPaid: boolean };

const userDetails: UserDetails = {
  name: "Ovie",
  isPaid: true,
  // email: "Ovie@gmail.com",
};

const createUser = ({ name, isPaid }: UserDetails) => {};

console.log(createUser(userDetails));

interface Course {
  name: string;
  price: number;
}

const createCourse = ({ name, price }: Course): Course => {
  console.log(`Creating course ${name} and the price is ${price}`);
  return { name, price };
};

console.log(createCourse({ name: "React js Course", price: 200 }));

interface UserDetails2 {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
}

let newUser: UserDetails2 = {
  _id: 23,
  name: "Rekewe",
  email: "rekewe@gmail.com",
  isActive: false,
};

let newUser2: UserDetails2 = {
  _id: 43,
  name: "Tamunor",
  email: "tamunor@gmail.com",
  isActive: true,
  creditCardDetails: 1689,
};

const createUser2 = (user: UserDetails2) => {
  if (user.creditCardDetails) {
    console.log(`${user.name} is a paid user`);
  } else {
    console.log(`${user.name} is not a paid user`);
  }
};

createUser2(newUser);
createUser2(newUser2);

type CardNumber = {
  card_number: string;
};

type CardDate = {
  card_date: string;
};

type cardDetails = CardNumber &
  CardDate & {
    CVV: number;
  };

export {};
