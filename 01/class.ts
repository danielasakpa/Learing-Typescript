export class UserClass {
  readonly _id: number;
  name: string;
  email: string;
  phoneNumber: number;

  constructor(_id: number, name: string, email: string, phoneNumber: number) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  startTrial() {
    return `${this.name} Trial has begin`;
  }

  getCoupon(couponName = "default value") {
    if (couponName === "first coupon") {
      return 80;
    } else if (couponName === "second coupon") {
      return 60;
    }

    return 20;
  }
}
