const Bits = require('../../../datastructures/Bits/solution1');

function testWithSolution(title, solution) {
  test(title + ': ' +
  '', () => {
    expect(solution(
      Bits.printBitsAsUnsignedNum('11101'.split('')),
      Bits.printBitsAsUnsignedNum('01111'.split('')),
    )).toBe(2);

    expect(solution(
      Bits.printBitsAsUnsignedNum('10001'.split('')),
      Bits.printBitsAsUnsignedNum('01111'.split('')),
    )).toBe(4);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);