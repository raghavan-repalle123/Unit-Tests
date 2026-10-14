const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true for array of numbers', () => {
    expect(
      validator.isAllNumbers([1, 2, 3]),
    ).to.equal(true);
  });

  it('should return false when array contains non-number', () => {
    expect(
      validator.isAllNumbers([1, '2', 3]),
    ).to.equal(false);
  });

  it('should throw error for non-array input', () => {
    expect(() => {
      validator.isAllNumbers('abc');
    }).to.throw();
  });
});
