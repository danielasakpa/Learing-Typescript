"use strict";
const detectTypes = (val) => {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
};
// narrowing down null or falsy values
const provideId = (id) => {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
};
function isAdminAccount(account) {
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
const logValue = (x) => {
    // narrowing down the type of a value by checking if it is the instance of and class
    if (x instanceof Date) {
        console.log(x.toUTCString());
        return;
    }
    console.log(x.toUpperCase());
};
logValue(new Date(2004, 5, 11));
function isFish(pet) {
    return pet.swim !== undefined;
}
console.log(isFish({ swim: () => { } }));
function getFood(pet) {
    // narrowing down using type predicates
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    pet;
    return "Bird food";
}
console.log(getFood({ swim: () => { } }));
function handleShapes(shape) {
    // narrowing down using property identifier
    if (shape.kind === "rectangle") {
        console.log(`This shape is a ${shape.kind.toUpperCase()}`);
    }
    else if (shape.kind === "circle") {
        console.log(`This shape is a ${shape.kind.toUpperCase()}`);
    }
    else {
        console.log(`This shape is a ${shape.kind.toUpperCase()}`);
    }
}
handleShapes({
    kind: "rectangle",
    length: 2,
    width: 4,
});
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.length * shape.width;
        case "square":
            return shape.side * shape.side;
        default:
            //narrowing down by checking the types with never type
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
