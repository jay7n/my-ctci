const Bits = require('../../../datastructures/Bits/solution1');

function testWithSolution (title, solution) {
  test(title + ': ' +
  '', () => {
    expect(solution(Bits.printBitsAsNum('0101'))).toStrictEqual([
      Bits.printBitsAsNum('0011'), 
      Bits.printBitsAsNum('0110')]);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);