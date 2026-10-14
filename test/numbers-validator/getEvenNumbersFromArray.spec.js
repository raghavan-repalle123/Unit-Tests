const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return only even numbers', () => {
    expect(
      validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6]),
    ).to.deep.equal([2, 4, 6]);
  });

  it('should throw error when array contains non-numbers', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([1, '2', 3]);
    }).to.throw();
  });
});
