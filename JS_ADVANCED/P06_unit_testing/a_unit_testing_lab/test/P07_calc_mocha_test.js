let expect = require('chai').expect;
let createCalculator = require("../P07_calc_func_for_test").createCalculator;

describe("calculator maker", function () {

    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it("should return object", function () {
        expect(typeof calc).to.equal("object");
    });

    it("should return 0 when created", function () {
        expect(calc.get()).to.equal(0);
    });

    it("should subtract", function () {
        calc.subtract(3);
        calc.subtract(100);
        expect(calc.get()).to.equal(-103);
    });

    it("should add", function () {
        calc.add(3);
        calc.add(100);
        expect(calc.get()).to.equal(103);
    });

    it("should work with fractions", function () {
        calc.add(3.14);
        calc.subtract(1.13);
        expect(calc.get()).to.be.closeTo(2.01, 0.001);
    });

    it("should add and subtract", function () {
        calc.add(10);
        calc.subtract(7);
        expect(calc.get()).to.equal(3);
    });

    it("should work with negative numbers", function () {
        calc.add(-10);
        calc.subtract(-7);
        expect(calc.get()).to.equal(-3);
    });

    it("should not work with strings", function () {
        calc.add("asdf");
        expect(calc.get()).to.be.NaN;
    });

    it("should not work with strings", function () {
        calc.subtract("asdf");
        expect(calc.get()).to.be.NaN;
    });

    it("should work with string numbers", function () {
        calc.subtract("3");
        expect(calc.get()).to.equal(-3);
    });

    it("should work with string numbers", function () {
        calc.add("3");
        expect(calc.get()).to.equal(3);
    })
});