const Bits = require('./solution1');

const testWithSolution = function(title) {
  test(title + ': ' +
  'test printNumAsNBits', () => {
    expect(Bits.printNumAsNBits(0)).toBe('0000');
    expect(Bits.printNumAsNBits(1)).toBe('0001');
    expect(Bits.printNumAsNBits(1, 4)).toBe('0001');
    expect(Bits.printNumAsNBits(2, 4)).toBe('0010');
    expect(Bits.printNumAsNBits(3, 4)).toBe('0011');
    expect(Bits.printNumAsNBits(3, 4)).toBe('0011');
    expect(Bits.printNumAsNBits(4, 4)).toBe('0100');
    expect(Bits.printNumAsNBits(5, 4)).toBe('0101');
    expect(Bits.printNumAsNBits(6, 4)).toBe('0110');
    expect(Bits.printNumAsNBits(7, 4)).toBe('0111');
    expect(Bits.printNumAsNBits(8, 4)).toBe('1000');
    expect(Bits.printNumAsNBits(9, 4)).toBe('1001');
    expect(Bits.printNumAsNBits(10, 4)).toBe('1010');
    expect(Bits.printNumAsNBits(11, 4)).toBe('1011');
    expect(Bits.printNumAsNBits(12, 4)).toBe('1100');
    expect(Bits.printNumAsNBits(13, 4)).toBe('1101');
    expect(Bits.printNumAsNBits(14, 4)).toBe('1110');
    expect(Bits.printNumAsNBits(15, 4)).toBe('1111');
    expect(Bits.printNumAsNBits(16, 4)).toBe('0000');
    expect(Bits.printNumAsNBits(17, 4)).toBe('0001');

    expect(Bits.printNumAsNBits(16, 5)).toBe('10000');
    expect(Bits.printNumAsNBits(17, 5)).toBe('10001');

  });
}

testWithSolution();