let expect = require('chai').expect;
let mathEnforcer = require("../P04_math_enforcer_func_for_test").mathEnforcer;

describe("math enforcer()", function () {

    describe("add functionality", function () {
        it("should work with negative numbers", function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it("should work with positive numbers", function () {
            expect(mathEnforcer.addFive(3)).to.equal(8);
        });
        it("should return undefined for non-numbers", function () {
            expect(mathEnforcer.addFive("asdf")).to.equal(undefined);
        });
        it("should work with floating point numbers", function () {
            expect(mathEnforcer.addFive(0.3)).to.be.closeTo(5.3, 0.01);
        });
    });

    describe("subtractTen functionality", function () {
        it("should work with negative numbers", function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it("should work with positive numbers", function () {
            expect(mathEnforcer.subtractTen(3)).to.equal(-7);
        });
        it("should return undefined for non-numbers", function () {
            expect(mathEnforcer.subtractTen("asdf")).to.equal(undefined);
        });
        it("should work with floating point numbers", function () {
            expect(mathEnforcer.subtractTen(0.3)).to.be.closeTo(-9.7, 0.01);
        });
    });

    describe("sum functionality", function () {
        it("should work with negative numbers", function () {
            expect(mathEnforcer.sum(-5, 8)).to.equal(3);
        });

        it("should work with negative numbers", function () {
            expect(mathEnforcer.sum(-5, -8)).to.equal(-13);
        });

        it("should work with positive numbers", function () {
            expect(mathEnforcer.sum(3, 6)).to.equal(9);
        });
        it("should return undefined for mathEnforcer.sum({}, 5)", function () {
            expect(mathEnforcer.sum({}, 5)).to.equal(undefined);
        });

        it("should return undefined for non numbers", function () {
            expect(mathEnforcer.sum(9, [])).to.equal(undefined);
        });

        it("should return 18 for mathEnforcer.sum(9, 9)", function () {
            expect(mathEnforcer.sum(9, 9)).to.equal(18);
        });

        it("should work with floating point numbers", function () {
            expect(mathEnforcer.sum(3.2, 3.1)).to.be.closeTo(6.3, 0.01);
        });

        it("should work with floating point numbers", function () {
            expect(mathEnforcer.sum(-3.2, -3.1)).to.be.closeTo(-6.3, 0.01);
        });
    });
});