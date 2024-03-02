"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
var daniel = {
    _id: 6735673,
    name: "Daniel Asakpa",
    email: "danielasakpa@gmail.com",
    phoneNumber: 9022434392,
    startTrial: function () {
        return "Trial has begin";
    },
    getCoupon: function (couponName) {
        if (couponName === void 0) { couponName = "default value"; }
        if (couponName === "first coupon") {
            return 80;
        }
        else if (couponName === "second coupon") {
            return 60;
        }
        return 20;
    },
};
console.log("".concat(daniel.name, " get ").concat(daniel.getCoupon("first coupon"), "% off his purchase"));
// create user object with class
var rukewe = new class_1.UserClass(8335626, "Rukewe Asakpa", "rukeweasakpa@gmail.com", 8028595972);
console.log(rukewe);
console.log("".concat(rukewe.name, " get ").concat(rukewe.getCoupon(), "% off his purchase"));
var Tamunor = {
    _id: 808635773,
    role: "admin",
    name: "Tamunor Mete",
    email: "tamunormete@gmail.com",
    phoneNumber: 9022434392,
    startTrial: function () {
        return "Trial has begin";
    },
    getCoupon: function (couponName) {
        if (couponName === void 0) { couponName = "default value"; }
        if (couponName === "first coupon") {
            return 80;
        }
        else if (couponName === "second coupon") {
            return 60;
        }
        return 20;
    },
};
