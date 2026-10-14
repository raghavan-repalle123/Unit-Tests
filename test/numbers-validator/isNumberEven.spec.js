const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe(('positive tests'), () => {
    it('should return true if number is even', () => {
      const validatorResults = validator.isNumberEven(4);

      expect(validatorResults).to.be.equal(true);
    });
  });

  describe(('negative tests'), () => {
    it('should return false  when provided a non Even  number', () => {
      const validatorResults = validator.isNumberEven(5);

      expect(validatorResults).to.be.equal(false);
    });

    it('should throw an error when provided a non-number value', () => {
      const input = 'four';

      expect(() => {
        validator.isNumberEven(input);
      }).to.throw(`[${input}] is not of type 'Number' it is type of "${typeof input}"`);
    });
  });
});
