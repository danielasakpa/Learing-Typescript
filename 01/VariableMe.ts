let greetings: string | number = "Good Morning my friend!";

let myNum = 6;

greetings.toUpperCase();

greetings = 10;

console.log(greetings);

interface user {
  name: string;
  id: number;
}

const user: user = {
  name: "Hayes",
  id: 0,
};

// const robot: user = {
//   name: "Robot",
//   function: "working",
// };

class UserAccount {
  name: string;
  id: number;
  func: Function;

  constructor(name: string, id: number, func: Function) {
    this.name = name;
    this.id = id;
    this.func = func;
  }
}

const User2: user = new UserAccount("daniel", 10, () =>
  console.log("My Name is Daniel")
);

const User3 = new UserAccount("Asakpa", 10, () =>
  console.log("My Name is Asakpa")
);

console.log(User2);
// console.log(User2.func); // Error! because 'func' is not in the interface

const showMessage = (userAcc: UserAccount) => {
  return userAcc.name;
};

// console.log(showMessage(User2))  // Error! Because 'User2' is not on type 'UserAccount'. It is only on type
console.log(showMessage(User3));

const getID = (id: number): number => {
  return id;
};

type user2 = { name: string; email: string };

const jsonParser = (jsonString: string): unknown => JSON.parse(jsonString);

const myAccount = jsonParser(
  `{ "name": "Dorothea", "email": "dorothea@gmail.com" }`
) as user2;

console.log("myAccount", myAccount);
myAccount.name;
myAccount.email;

const myNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7];

type useArray<T> = Array<T>;

const myString: useArray<number> = [1, 2, 3, 4, 5, 6, 7];

type Student = { name: string; email?: string };

// Corrected type for myStudent and myStudent2
const myStudent: Student[] = [{ name: "daniel" }, { name: "asakpa" }];

const myStudent2: Student[] = [
  { name: "daniel", email: "daniel@gmail.com" },
  { name: "asakpa", email: "asakap@gmail.com" },
];

// Corrected interface with a function to add a student
interface getStudentInformation<T> {
  add: (obj: T) => void;
}

// Usage of the interface
const studentInfo: getStudentInformation<Student> = {
  add: (obj) => {
    if (obj.email) {
      console.log(obj.email);
    } else {
      console.log(obj.name);
    }
  },
};

// Example of using the interface
studentInfo.add({ name: "John" }); // Logs: John
studentInfo.add({ name: "Alice", email: "alice@gmail.com" }); // Logs: alice@gmail.com

type person = { name: string; email: string; age: number };

const person1: person[] = [
  { name: "Alice", email: "alice@gmail.com", age: 30 },
];

interface Person<T> {
  add: (obj: T) => void;
  get: (arr: T[], index: number) => T;
}

const usePerson: Person<person> = {
  add: (obj: person) => {
    person1.push(obj);
  },
  get: (arr: person[], index: number) => {
    return arr[index];
  },
};

usePerson.add({ name: "daniel", email: "daniel@gmail.com", age: 20 });
usePerson.add({ name: "asakpa", email: "asakap@gmail.com", age: 50 });
console.log(usePerson.get(person1, 1));

interface MyComponentProps<T> {
  data: T[];
  renderItem?: (item: T, index: number) => void;
}

const MyComponent = ({ data, renderItem }: MyComponentProps<string>) => {};

export {};
