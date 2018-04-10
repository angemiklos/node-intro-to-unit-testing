// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return "fizz buzz" if the number is divisible by 3 and 5', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const fbNormalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: 15000, expected: 'fizz-buzz'}
    ];
    // for each set of input (num), `fizzBuzzer` should
    // produce the expected value
    fbNormalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return "fizz" if the number is divisible by 3', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const fNormalCases = [
      {num: 12, expected: 'fizz'},
      {num: 3, expected: 'fizz'},
      {num: 21, expected: 'fizz'}
    ];
    // for each set of input (num), `fizzBuzzer` should
    // produce the expected value
    fNormalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return "buzz" if the number is divisible by 5', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const bNormalCases = [
      {num: 5, expected: 'buzz'},
      {num: 200, expected: 'buzz'},
      {num: 35, expected: 'buzz'}
    ];
    // for each set of input (num), `fizzBuzzer` should
    // produce the expected value
    bNormalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return number if not mult of 3 or 5', function() {
    [1, 2, 4, 7].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not numbers
    const badInputs = [
      'a',
      '1',
      false
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});