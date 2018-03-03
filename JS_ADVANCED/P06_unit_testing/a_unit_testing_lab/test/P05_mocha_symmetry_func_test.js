let expect = require('chai').expect;
let isSymmetric = require("../P05_symmetry_func_for_test").isSymmetric;

describe("isSymmetric(arr)", function(){
    it("should return true", function(){
        expect(isSymmetric([1, 2, 3, 2, 1])).to.equal(true);
    });

    it("should return true", function(){
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.equal(true);
    });

    it("should return false", function(){
        expect(isSymmetric([1, 2, 3, 3, 3, 1])).to.equal(false);
    });

    it("should return false", function(){
        expect(isSymmetric([1, 2, 3, 3, 1])).to.equal(false);
    });

    it("should return false", function(){
        expect(isSymmetric([1, 2])).to.equal(false);
    });

    it("should return true", function(){
        expect(isSymmetric([1])).to.equal(true);
    });

    it("should return true", function(){
        expect(isSymmetric([1, "str", [], {}, [], "str", 1])).to.equal(true);
    });

    it("should return false", function(){
        expect(isSymmetric([1, "str", [], {a: 7}, {A: 7}, [], "str", 1])).to.equal(false);
    });

    it("should return false", function(){
        expect(isSymmetric("asdf")).to.equal(false);
    })
});