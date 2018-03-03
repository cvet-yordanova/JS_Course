let expect = require('chai').expect;
let sum = require("../P04_test_sum_function").sum;

describe("sum(arr)", function () {
    it("should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.equal(3);
    });

    it("should return 0 for []", function () {
        expect(sum([])).to.equal(0);
    });

    it("should return 2 for [-1, -2, 5]", function () {
        expect(sum([-1, -2, 5])).to.equal(2);
    });

    it("should return 1 for [1]", function () {
        expect(sum([1])).to.equal(1);
    });

    it("should return NaN for ['Stamat', -2, 5]", function () {
        expect(sum(['Stamat', -2, 5])).to.be.NaN;
    })
});