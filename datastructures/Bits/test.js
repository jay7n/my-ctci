const Bits = require('./solution1');

const testWithSolution = function(title) {
  test(title + ': ' +
  'test printNumAsNBits with positive numbers', () => {
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

    expect(Bits.printNumAsNBits(16, 5)).toBe('1 0000');
    expect(Bits.printNumAsNBits(17, 5)).toBe('1 0001');

    expect(Bits.printNumAsNBits(7, 8)).toBe('0000 0111');
    expect(Bits.printNumAsNBits(7, 32)).toBe('0000 0000 0000 0000 0000 0000 0000 0111');
  });

  test(title + ': ' +
  'test printNumAsNBits with negative numbers', () => {
    expect(Bits.printNumAsNBits(-1)).toBe('1111');
  });

  test(title + ': ' +
  'test printNBitsAsNum with positive numbers', () => {
    expect(Bits.printBitsAsNum('0000')).toBe(0);
    expect(Bits.printBitsAsNum('0001')).toBe(1);
    expect(Bits.printBitsAsNum('0010')).toBe(2);
    expect(Bits.printBitsAsNum('0011')).toBe(3);
    expect(Bits.printBitsAsNum('0100')).toBe(4);
  });

  test(title + ': ' +
  'test printNBitsAsNum with negative numbers', () => {
    expect(Bits.printBitsAsNum('1000')).toBe(-0);
    expect(Bits.printBitsAsNum('1001')).toBe(-7);
    expect(Bits.printBitsAsNum('1010')).toBe(-6);
    expect(Bits.printBitsAsNum('1011')).toBe(-5);
    expect(Bits.printBitsAsNum('1100')).toBe(-4);
    expect(Bits.printBitsAsNum('1101')).toBe(-3);
    expect(Bits.printBitsAsNum('1110')).toBe(-2);
    expect(Bits.printBitsAsNum('1111')).toBe(-1);
  });

  test(title + ': ' +
  'test both sides', () => {
    expect(Bits.printBitsAsNum(Bits.printNumAsNBits(0, 4))).toBe(0);
    expect(Bits.printBitsAsNum(Bits.printNumAsNBits(1, 4))).toBe(1);
    expect(Bits.printBitsAsNum(Bits.printNumAsNBits(2, 4))).toBe(2);
    expect(Bits.printBitsAsNum(Bits.printNumAsNBits(3, 4))).toBe(3);
    expect(Bits.printBitsAsNum(Bits.printNumAsNBits(4, 4))).toBe(4);
  });

}

testWithSolution();