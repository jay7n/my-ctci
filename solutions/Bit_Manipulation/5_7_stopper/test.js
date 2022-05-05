const Bits = require('../../../datastructures/Bits/solution1');
function testWithSolution(title, solution) {
  test(title + ': ' + 
  '', () => {
    expect(solution(
      Bits.printBitsAsUnsignedNum('0101'.split(''))
    )).toBe(
      Bits.printBitsAsUnsignedNum('1010'.split(''))
    );
    expect(solution(
      Bits.printBitsAsUnsignedNum('110110'.split(''))
    )).toBe(
      Bits.printBitsAsUnsignedNum('111001'.split(''))
    );
    expect(solution(
      Bits.printBitsAsUnsignedNum('0011010'.split(''))
    )).toBe(
      Bits.printBitsAsUnsignedNum('0100101'.split(''))
    );
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);