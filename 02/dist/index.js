"use strict";
// class User {
//   name: string;
//   email: string;
//   private readonly city: string = "Lagos";
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
//pro way of writing classes in TS
class User {
    constructor(name, email, _id) {
        this.name = name;
        this.email = email;
        this._id = _id;
        // should be private and can only be set after the object has been created from the class
        //   private _courseCount = 1;
        this._courseCount = 1;
        this.city = "Lagos";
    }
    deleteToken() {
        console.log("Token was deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return `${this.name} has a total of ${this._courseCount} course`;
    }
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more then one");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount(courseNum) {
        // this.setCourseCount = courseNum;
        this._courseCount = courseNum;
    }
}
const daniel = new User("daniel asakpa", "danielasakpa@gmail.com", 76836);
console.log(daniel.getAppleEmail);
daniel.setCourseCount = 2;
console.log(daniel.getCourseCount);
const ejiro = new SubUser("ejiro asakpa", "ejiroasakpa@gmail.com", 66876);
ejiro.changeCourseCount(4);
console.log(ejiro.getCourseCount);
