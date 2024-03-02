"use strict";
function myName(arg) {
    return arg;
}
const score = [];
const names = [];
const identity = (arg) => {
    return arg;
};
console.log(identity("My name is Daniel Asakpa"));
identity({
    brand: "gucci",
    type: 7,
});
const getSearchProducts = (products) => {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
};
const anotherFunction = (valOne, valTwo) => {
    return {
        valOne,
        valTwo,
    };
};
anotherFunction(3, 5.6);
const x = { a: 1, b: 2, c: 3 };
const getProperty = (obj, key) => {
    return obj[key];
};
getProperty(x, "c");
const connectDB = (valOne, valTwo) => {
    return {
        valOne,
        valTwo,
    };
};
console.log(connectDB(4, {
    connection: "connection",
    username: "Ovie Asakpa",
    password: "Ogfundz304@",
}));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const sellCourse = new Sellable();
sellCourse.addToCart({
    name: "Learn web 3",
    author: "daniel asakpa",
    subject: "web 3",
});
