const Bits = require('./solution1');

const testWithSolution = function(title) {
  test(title + ': ' +
  'test printIn4Bits', () => {
    expect(Bits.printIn4Bits(1)).toBe('0001');
  });
}

testWithSolution();