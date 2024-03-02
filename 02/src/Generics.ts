function myName<T>(arg: T): T {
  return arg;
}

const score: Array<number> = [];
const names: Array<string> = [];

const identity = <T>(arg: T): T => {
  return arg;
};

console.log(identity("My name is Daniel Asakpa"));

interface Bootle {
  brand: string;
  type: number;
}

identity<Bootle>({
  brand: "gucci",
  type: 7,
});

const getSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
};

const anotherFunction = <T, U extends number>(valOne: T, valTwo: U): Object => {
  return {
    valOne,
    valTwo,
  };
};

anotherFunction(3, 5.6);

const x = { a: 1, b: 2, c: 3 };

const getProperty = <T, Key extends keyof T>(obj: T, key: Key): T[Key] => {
  return obj[key];
};

getProperty(x, "c");

interface Database {
  connection: string;
  username: string;
  password: string;
}

const connectDB = <T, U extends Database>(valOne: T, valTwo: U): Object => {
  return {
    valOne,
    valTwo,
  };
};

console.log(
  connectDB(4, {
    connection: "connection",
    username: "Ovie Asakpa",
    password: "Ogfundz304@",
  })
);

interface Quiz {
  name: string;
  type: string;
}

interface course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

const sellCourse = new Sellable<course>();

sellCourse.addToCart({
  name: "Learn web 3",
  author: "daniel asakpa",
  subject: "web 3",
});
