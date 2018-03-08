let expect = require('chai').expect;
let lookupChar = require("../P03_char_look_up_for_test").lookupChar;

describe("charLookUp()", function () {

    it("should return undefined for first param not string", function () {
        expect(lookupChar({}, 2)).to.equal(undefined);
    });

    it("should return undefined for second param not int", function () {
        expect(lookupChar("string", {})).to.equal(undefined);
    });

    it("should return undefined for idx 0.5", function () {
        expect(lookupChar('asdfgh', 0.5)).to.equal(undefined);
    });

    it("should return 'Incorrect index' for greater idx than the string length", function () {
        expect(lookupChar("string", 1000)).to.equal("Incorrect index");
    });

    it("should return 'Incorrect index' for under 0 idx", function () {
        expect(lookupChar("string", -1000)).to.equal("Incorrect index");
    });

    it("should return 'r' for lookUpChar('string',2)", function () {
        expect(lookupChar("string", 2)).to.equal('r');
    })
});