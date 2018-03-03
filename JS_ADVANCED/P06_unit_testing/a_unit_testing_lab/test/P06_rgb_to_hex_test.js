let expect = require('chai').expect;
let rgbToHexColor = require("../P06_rgb_to_hex_func_for_test").rgbToHexColor;

describe("rgbToHexColor(red, green, blue)", function () {
    it("should return undefined for not integers", function () {
        expect(rgbToHexColor(2.3, 15, 15)).to.equal(undefined);
        expect(rgbToHexColor(15, 2.3, 15)).to.equal(undefined);
        expect(rgbToHexColor(15, 15, 2.3)).to.equal(undefined);
    });

    it("should return undefined for negative values", function () {
        expect(rgbToHexColor(-2, 15, 2)).to.equal(undefined);
        expect(rgbToHexColor(15, -2, 2)).to.equal(undefined);
        expect(rgbToHexColor(15, 2, -2)).to.equal(undefined);
    });

    it("should return undefined for greater than 255 values", function () {
        expect(rgbToHexColor(256, 15, 2)).to.equal(undefined);
        expect(rgbToHexColor(15, 256, 2)).to.equal(undefined);
        expect(rgbToHexColor(15, 2, 256)).to.equal(undefined);
    });

    it("should return undefined for ('5', [3], {8:9})", function () {
        expect(rgbToHexColor("5", [3], {8: 9})).to.equal(undefined);
    });

    it("should return undefined for empty input", function () {
        expect(rgbToHexColor()).to.equal(undefined);
    });

    it("should return #FF9EAA for (255, 158, 170) ", function () {
        expect(rgbToHexColor(255, 158, 170)).to.equal("#FF9EAA");
    });

    it("should return #000000 for (0, 0, 0)  ", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });

    it("should return #0C0D0E for (12, 13, 14)  ", function () {
        expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
    });

    it("should return #FFFFFF for (255, 255, 255)  ", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });

});