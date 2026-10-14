const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true for integer', () => {
    expect(
      validator.isInteger(5),
    ).to.equal(true);
  });

  it('should return false for float', () => {
    expect(
      validator.isInteger(5.5),
    ).to.equal(false);
  });

  it('should throw error for non-number', () => {
    expect(() => {
      validator.isInteger('5');
    }).to.throw();
  });
});
