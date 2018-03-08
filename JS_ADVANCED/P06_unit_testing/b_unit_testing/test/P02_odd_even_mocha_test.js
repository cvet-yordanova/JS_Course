let expect = require('chai').expect;
let isOddOrEven = require("../P02_is_odd_or_even_func_for_test").isOddOrEven;

describe('isOddOrEven()', function(){
    it("should return undefined for not string input", function(){
        expect(isOddOrEven({})).to.equal(undefined);
    });

    it("should return odd for 'qwe'", function(){
        expect(isOddOrEven('qwe')).to.equal('odd');
    });

    it("should return even for 'qwee'", function(){
        expect(isOddOrEven('qwee')).to.equal('even');
    })
});