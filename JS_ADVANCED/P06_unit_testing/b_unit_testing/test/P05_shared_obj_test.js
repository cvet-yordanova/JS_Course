let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = require("../P05_shared_obj_func_for_test/shared_obj.js").sharedObject;

document.body.innerHTML = `<body>
<div id="wrapper">
   <input type="text" id="name">
   <input type="text" id="income">
</div>
</body>`;

describe('shared obj', () => {

    describe('Initial value tests', () => {
        it('initial name should be null', () => {
            expect(sharedObject.name).to.be.null;
        });

        it('initial income should be null', function () {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe('Change name tests', () => {

        it('should not change with an empty string',() => {
            sharedObject.changeName('test');
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('test', 'value changed incorrectly');
        });

        it('name should be changed', () => {
            sharedObject.changeName('test1');
            expect(sharedObject.name).to.equal('test1', 'value changed incorrectly');
        });

        describe('Name input tests', () => {

            it('should not change with an empty string', () => {
                sharedObject.changeName('test');
                sharedObject.changeName('');
                let nameValue = $('#name').val();
                expect(nameValue).to.be.equal('test', 'value changed incorrectly');
            });

            it('should change with string', () => {
                sharedObject.changeName('test');
                let nameValue = $('#name').val();
                expect(nameValue).to.be.equal('test', 'value changed incorrectly');
            });

        });
    });

    describe('Change income tests', () => {

        it('should not work with NaN', () => {
            sharedObject.changeIncome(2);
            sharedObject.changeIncome('asd');
            expect(sharedObject.income).to.be.equal(2, 'value changed incorrectly');
        });

        it('should not work with 0 and smaller numbers', () => {
            sharedObject.changeIncome(2);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(2, 'value changed incorrectly');
        });

        it('should not work with floating point numbers',() => {
            sharedObject.changeIncome(2);
            sharedObject.changeIncome(0.3);
            expect(sharedObject.income).to.be.equal(2, 'value changed incorrectly');
        });

        it('should work with positive integers', () => {
            sharedObject.changeIncome(2);
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5, 'value changed incorrectly');
        });

        describe('Change income input tests', () => {

            it('should not work with Nan', () => {
                sharedObject.changeIncome(2);
                sharedObject.changeIncome('asd');
                expect($('#income').val()).to.be.equal('2', 'value changed incorrectly');
            });

            it('should not work with 0 and smaller numbers', () => {
                sharedObject.changeIncome(2);
                sharedObject.changeIncome(0);
                expect($('#income').val()).to.be.equal('2', 'value changed incorrectly');
            });

            it('should not work with floating point numbers', () => {
                sharedObject.changeIncome(2);
                sharedObject.changeIncome(0.3);
                expect($('#income').val()).to.be.equal('2', 'value changed incorrectly');
            });

            it('should work with positive integers', () => {
                sharedObject.changeIncome(2);
                sharedObject.changeIncome(5);
                expect($('#income').val()).to.be.equal('5', 'value changed incorrectly');
            });

        });

    });


    describe('Update name input function', () => {

        it('should not work with empty string', () => {
            sharedObject.changeName('test');
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('test', 'value changed incorrectly');
        });

        it('should work with string', () => {
            sharedObject.changeName('test');
            $('#name').val('test2');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('test2', 'value changed incorrectly');
        });

    });


    describe('update income tests', () => {

        it('should not work with non integer inputs', () => {
            sharedObject.changeIncome(2);
            $('#income').val('asd');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(2, 'value changed incorrectly');
        });

        it('should not work with 0', () => {
            sharedObject.changeIncome(2);
            $('#income').val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(2, 'value changed incorrectly');
        });

        it('should not work with negative numbers', () => {
            sharedObject.changeIncome(2);
            $('#income').val(-3);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(2, 'value changed incorrectly');
        });


        it('should not work with floating point numbers', () => {
            sharedObject.changeIncome(2);
            $('#income').val(0.3);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(2, 'value changed incorrectly');
        });

        it('should work with positive integers', () => {
            sharedObject.changeIncome(2);
            $('#income').val('5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5, 'value changed incorrectly');
        });

    });

});

