const detectTypes = (val: number | string) => {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
};

// narrowing down null or falsy values
const provideId = (id: string | null) => {
  if (!id) {
    console.log("Please provide id");
    return;
  }
  id.toLowerCase();
};

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  // narrowing down the interface in use
  if ("isAdmin" in account) {
    console.log(`${account.name} is an Admin`);
    return;
  }

  console.log(`${account.name} is an ordinary User`);
}

isAdminAccount({
  name: "Daniel Asakpa",
  email: "danielasakpa@gmail.com",
  isAdmin: true,
});

const logValue = (x: Date | string) => {
  // narrowing down the type of a value by checking if it is the instance of and class
  if (x instanceof Date) {
    console.log(x.toUTCString());
    return;
  }

  console.log(x.toUpperCase());
};

logValue(new Date(2004, 5, 11));

type Fish = { swim: () => void };

type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

console.log(isFish({ swim: () => {} }));

function getFood(pet: Fish | Bird): string {
  // narrowing down using type predicates
  if (isFish(pet)) {
    pet;
    return "Fish food";
  }
  pet;
  return "Bird food";
}

console.log(getFood({ swim: () => {} }));

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type shape = Circle | Square | Rectangle;

function handleShapes(shape: shape) {
  // narrowing down using property identifier
  if (shape.kind === "rectangle") {
    console.log(`This shape is a ${shape.kind.toUpperCase()}`);
  } else if (shape.kind === "circle") {
    console.log(`This shape is a ${shape.kind.toUpperCase()}`);
  } else {
    console.log(`This shape is a ${shape.kind.toUpperCase()}`);
  }
}

handleShapes({
  kind: "rectangle",
  length: 2,
  width: 4,
});

function getArea(shape: shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "rectangle":
      return shape.length * shape.width;

    case "square":
      return shape.side * shape.side;

    default:
      //narrowing down by checking the types with never type
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
