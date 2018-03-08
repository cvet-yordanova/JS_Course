let expect = require('chai').expect;
 let jsdom = require('jsdom-global')();
let $ = require('jquery');
let nuke = require("../P06_armagedom/P06_armagedom_for_test.js").nuke;


describe("Nuke function", function () {

    let startHtml = `<div id="target">
                         <div class="nested target">
                            <p>This is some text</p>
                         </div>
                         <div class="target">
                            <p>Empty div</p>
                         </div>
                         <div class="inside">
                            <span class="nested">Some more text</span>
                            <span class="target">Some more text</span>
                          </div>
                   </div>`;

    beforeEach(function () {
        document.body.innerHTML = startHtml
    });

    it("should not change dom with less than 0 parameters", function () {
        nuke();
        expect($('body').html()).to.be.equal(startHtml);
    });

    it("should not change dom with 1 parameter", function () {
        nuke();
        expect($('body').html()).to.be.equal(startHtml);
    });

    it("should not change with 2 invalid parameters", function () {
        nuke('#invalidID', '#invalidID');
        expect($('body').html()).to.be.equal(startHtml);
    });

    it("should not change with 1 invalid parameter", function () {
        nuke('#invalidID', '#target');
        expect($('body').html()).to.be.equal(startHtml);
    });

    it("should not change with identical parameters", function () {
        nuke('#target', '#target');
        expect($('body').html()).to.be.equal(startHtml);
    });


    it("should delete nested selectors", function () {
        nuke('.nested', '.target');
        expect($('body').html()).to.not.equal(startHtml);
    });

    it("should change nothing for not nested selectors", function () {
        nuke('.inside', '.nested');
        expect($('body').html()).to.equal(startHtml);
    })

});