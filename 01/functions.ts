function addTwo(num: number): number {
  return num + 2;
}

// addTwo("10");  // Error, expected a number but got a string
console.log(addTwo(5));

const getUpper = (str: string): string => {
  return str.toUpperCase();
};

console.log(getUpper("my name is daniel asakpa"));

interface User {
  name: string;
  age: number;
}

const signUp = (User: User, relationship: string): string => {
  return `Welcome ${User.name}, you are ${User.age} years old and i am $.`;
};

const handleError = (errmsg: string): void => {
  throw new Error(errmsg);
};

handleError("it's an error");

console.log(signUp({ name: "daniel asakpa", age: 20 }, "taken"));

const cars = ["BMW", "Mercedes", "Audi"];
const random = ["Red", false, "Blue", "Green", 1, true, 3, "yellow"];

const res = cars.map((car): string => {
  return `I like ${car}`;
});

console.log(res);

random.map((item) => {
  console.log(`Item is ${typeof item}: ${item}`);
});

const handelError = (error: string): never => {
  throw new Error(error);
};

console.log(handelError("You have a new Error!! ❌❌"));

export {};
