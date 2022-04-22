const Bits = require('./solution1');

const testWithSolution = function(title) {
  test(title + ': ' +
  'test printIn4Bits', () => {
    expect(Bits.printNumAs4Bits(8)).toBe('0001');
  });
}

testWithSolution();