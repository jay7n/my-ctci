const Bits = require('../../../datastructures/Bits/solution1');

const testWithSolution = function(title, solution) {
  test(title + ':' +
  '', () => {
    const N = Bits.printBitsAsNum('10000000000');
    const M = Bits.printBitsAsNum('10011');
    const expected = Bits.printBitsAsNum('10001001100');
    console.log('M = ', M, 'N = ', N, 'expected = ', expected);

    const i = 2;
    const j = 6;

    const res = solution(N, M, i, j);
    expect(res).toBe(expected);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);