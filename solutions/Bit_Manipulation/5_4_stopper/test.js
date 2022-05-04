const Bits = require('../../../datastructures/Bits/solution1');

function testWithSolution (title, solution) {
  test(title + ': ' +
  '', () => {
    expect(solution(Bits.printBitsAsUnsignedNum('0101'.split('')))).toStrictEqual([
      Bits.printBitsAsUnsignedNum('0011'.split('')), 
      Bits.printBitsAsUnsignedNum('0110'.split(''))
    ]);
    expect(solution(Bits.printBitsAsUnsignedNum('010100'.split('')))).toStrictEqual([
      Bits.printBitsAsUnsignedNum('001100'.split('')), 
      Bits.printBitsAsUnsignedNum('011000'.split(''))
    ]);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);