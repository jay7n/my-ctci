const Bits = require('../../../datastructures/Bits/solution1');

function testWithSolution (title, solution) {
  test(title + ': ' +
  '', () => {
    expect(solution(Bits.printBitsAsNum('0111'))).toStrictEqual(['', '01101']);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);