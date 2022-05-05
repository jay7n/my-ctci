const Bits = require('../../../datastructures/Bits/solution1');
function testWithSolution(title, solution) {
  test(title + ': ' + 
  '', () => {
    expect(solution(
      Bits.printBitsAsUnsignedNum('0101'.split(''))
    )).toBe(
      Bits.printBitsAsUnsignedNum('1010'.split(''))
    );
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);