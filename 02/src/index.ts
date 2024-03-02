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
  // should be private and can only be set after the object has been created from the class
  //   private _courseCount = 1;
  protected _courseCount = 1;
  readonly city = "Lagos";

  constructor(public name: string, public email: string, private _id: number) {}

  private deleteToken() {
    console.log("Token was deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get getCourseCount(): string {
    return `${this.name} has a total of ${this._courseCount} course`;
  }

  set setCourseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more then one");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily = true;

  changeCourseCount(courseNum: number) {
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
