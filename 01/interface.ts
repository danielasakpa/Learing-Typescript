import { UserClass } from "./class";

interface User {
  readonly _id: number;
  name: string;
  email: string;
  googleId?: string;
  startTrial: () => string;
  getCoupon: (couponName?: string) => number;
}

// Re-opening of the interface
interface User {
  githubToken?: string;
  phoneNumber: number;
}

// extending the Admin interface from User interface
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const daniel: User = {
  _id: 6735673,
  name: "Daniel Asakpa",
  email: "danielasakpa@gmail.com",
  phoneNumber: 9022434392,
  startTrial: () => {
    return "Trial has begin";
  },
  getCoupon: (couponName = "default value") => {
    if (couponName === "first coupon") {
      return 80;
    } else if (couponName === "second coupon") {
      return 60;
    }

    return 20;
  },
};

console.log(
  `${daniel.name} get ${daniel.getCoupon("first coupon")}% off his purchase`
);

// create user object with class
const rukewe: User = new UserClass(
  8335626,
  "Rukewe Asakpa",
  "rukeweasakpa@gmail.com",
  8028595972
);

console.log(rukewe);
console.log(`${rukewe.name} get ${rukewe.getCoupon()}% off his purchase`);

const Tamunor: Admin = {
  _id: 808635773,
  role: "admin",
  name: "Tamunor Mete",
  email: "tamunormete@gmail.com",
  phoneNumber: 9022434392,
  startTrial: () => {
    return "Trial has begin";
  },
  getCoupon: (couponName = "default value") => {
    if (couponName === "first coupon") {
      return 80;
    } else if (couponName === "second coupon") {
      return 60;
    }
    return 20;
  },
};

export {};
