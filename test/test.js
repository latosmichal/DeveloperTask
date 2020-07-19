const assert = require('assert');
const utils = require('../util');

describe('Calculate Polynomial', function () {
    describe('#calculatePolynomial()', function () {
        it('return combined polynomial', function () {
            expression1 = '3x^3 - x';
            expression2 = '2x2 + 2x + 1';
            let polynomial = utils.calculatePolynomial(expression1,expression2);
            assert.equal(polynomial,'3x<sup>3</sup> + 2x<sup>2</sup> + x + 1');
        })
    })
});

describe('Wrong input Polynomial', function () {
    describe('#calculatePolynomial()', function () {
        it('should return an error', function () {
            expression1 = '3x^3 - x';
            expression2 = '2x2+ 2x + 1';
            assert.throws(() => {utils.calculatePolynomial(expression1,expression2)}, Error, /Wrong expression, NaN in dictonary/)
        });
    });
});

describe('Wrong exponent', function () {
    describe('#calculatePolynomial()', function () {
        it('should throw an error', function () {
            expression1 = '2x-';
            expression2 = '3';
            assert.throws(() => {utils.calculatePolynomial(expression1,expression2)}, Error, /Wrong exponent/)
        })
    })
});

describe('Letters in input', function () {
    describe('#calculatePolynomial()', function () {
        it('should throw an error', function () {
            expression1 = 'abcd';
            expression2 = '2x + 3';
            assert.throws(() => {utils.calculatePolynomial(expression1,expression2)}, Error, /Wrong exponent/)
        })
    })
});