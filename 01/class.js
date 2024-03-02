"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClass = void 0;
var UserClass = /** @class */ (function () {
    function UserClass(_id, name, email, phoneNumber) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    UserClass.prototype.startTrial = function () {
        return "".concat(this.name, " Trial has begin");
    };
    UserClass.prototype.getCoupon = function (couponName) {
        if (couponName === void 0) { couponName = "default value"; }
        if (couponName === "first coupon") {
            return 80;
        }
        else if (couponName === "second coupon") {
            return 60;
        }
        return 20;
    };
    return UserClass;
}());
exports.UserClass = UserClass;
