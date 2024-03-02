"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// addTwo("10");  // Error, expected a number but got a string
console.log(addTwo(5));
var getUpper = function (str) {
    return str.toUpperCase();
};
console.log(getUpper("my name is daniel asakpa"));
var signUp = function (User, relationship) {
    return "Welcome ".concat(User.name, ", you are ").concat(User.age, " years old and i am $.");
};
var handleError = function (errmsg) {
    throw new Error(errmsg);
};
handleError("it's an error");
console.log(signUp({ name: "daniel asakpa", age: 20 }, "taken"));
