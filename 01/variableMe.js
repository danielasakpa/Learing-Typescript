"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Good Morning my friend!";
var myNum = 6;
greetings.toUpperCase();
greetings = 10;
console.log(greetings);
var user = {
    name: "Hayes",
    id: 0,
};
// const robot: user = {
//   name: "Robot",
//   function: "working",
// };
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, func) {
        this.name = name;
        this.id = id;
        this.func = func;
    }
    return UserAccount;
}());
var User2 = new UserAccount("daniel", 10, function () {
    return console.log("My Name is Daniel");
});
var User3 = new UserAccount("Asakpa", 10, function () {
    return console.log("My Name is Asakpa");
});
console.log(User2);
// console.log(User2.func); // Error! because 'func' is not in the interface
var showMessage = function (userAcc) {
    return userAcc.name;
};
// console.log(showMessage(User2))  // Error! Because 'User2' is not on type 'UserAccount'. It is only on type
console.log(showMessage(User3));
var getID = function (id) {
    return id;
};
var jsonParser = function (jsonString) { return JSON.parse(jsonString); };
var myAccount = jsonParser("{ \"name\": \"Dorothea\", \"email\": \"dorothea@gmail.com\" }");
console.log("myAccount", myAccount);
myAccount.name;
myAccount.email;
var myNumbers = [1, 2, 3, 4, 5, 6, 7];
var myString = [1, 2, 3, 4, 5, 6, 7];
// Corrected type for myStudent and myStudent2
var myStudent = [{ name: "daniel" }, { name: "asakpa" }];
var myStudent2 = [
    { name: "daniel", email: "daniel@gmail.com" },
    { name: "asakpa", email: "asakap@gmail.com" },
];
// Usage of the interface
var studentInfo = {
    add: function (obj) {
        if (obj.email) {
            console.log(obj.email);
        }
        else {
            console.log(obj.name);
        }
    },
};
// Example of using the interface
studentInfo.add({ name: "John" }); // Logs: John
studentInfo.add({ name: "Alice", email: "alice@gmail.com" }); // Logs: alice@gmail.com
var person1 = [
    { name: "Alice", email: "alice@gmail.com", age: 30 },
];
var usePerson = {
    add: function (obj) {
        person1.push(obj);
    },
    get: function (arr, index) {
        return arr[index];
    },
};
usePerson.add({ name: "daniel", email: "daniel@gmail.com", age: 20 });
usePerson.add({ name: "asakpa", email: "asakap@gmail.com", age: 50 });
console.log(usePerson.get(person1, 1));
var MyComponent = function (_a) {
    var data = _a.data, renderItem = _a.renderItem;
};
