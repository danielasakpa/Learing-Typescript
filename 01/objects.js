"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "daniel",
    email: "danielasakpa@gmail.com",
    age: 20,
    isActive: true,
};
var userDetails = {
    name: "Ovie",
    isPaid: true,
    // email: "Ovie@gmail.com",
};
var createUser = function (_a) {
    var name = _a.name, isPaid = _a.isPaid;
};
console.log(createUser(userDetails));
var createCourse = function (_a) {
    var name = _a.name, price = _a.price;
    console.log("Creating course ".concat(name, " and the price is ").concat(price));
    return { name: name, price: price };
};
console.log(createCourse({ name: "React js Course", price: 200 }));
var newUser = {
    _id: 23,
    name: "Rekewe",
    email: "rekewe@gmail.com",
    isActive: false,
};
var newUser2 = {
    _id: 43,
    name: "Tamunor",
    email: "tamunor@gmail.com",
    isActive: true,
    creditCardDetails: 1689,
};
var createUser2 = function (user) {
    if (user.creditCardDetails) {
        console.log("".concat(user.name, " is a paid user"));
    }
    else {
        console.log("".concat(user.name, " is not a paid user"));
    }
};
createUser2(newUser);
createUser2(newUser2);
