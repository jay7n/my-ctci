const Bits = require('../../../datastructures/Bits/solution1');

function testWithSolution (title, solution) {
  test(title + ': ' +
  '', () => {
    expect(solution(Bits.printBitsAsUnsignedNum('0101'.split('')))).toStrictEqual([
      Bits.printBitsAsUnsignedNum('0011'.split('')), 
      Bits.printBitsAsUnsignedNum('0110'.split(''))
    ]);
    expect(solution(Bits.printBitsAsUnsignedNum('010100'.split('')))).toStrictEqual([
      Bits.printBitsAsUnsignedNum('010010'.split('')), 
      Bits.printBitsAsUnsignedNum('011000'.split(''))
    ]);
    expect(solution(Bits.printBitsAsUnsignedNum('0111'.split('')))).toStrictEqual([
      'already smallest', 
      Bits.printBitsAsUnsignedNum('1011'.split(''))
    ]);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);