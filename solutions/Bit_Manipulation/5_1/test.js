const Bits = require('../../../datastructures/Bits/solution1');

const testWithSolution = function(title, solution) {
  test(title + ':' +
  '', () => {
    const N = Bits.printBitsAsUnsignedNum('10000000000'.split(''));
    const M = Bits.printBitsAsUnsignedNum('10011'.split(''));
    const expected = Bits.printBitsAsUnsignedNum('10001001100');
    console.log('M = ', M, 'N = ', N, 'expected = ', expected);

    const i = 2;
    const j = 6;

    const res = solution(N, M, i, j);
    expect(res).toBe(expected);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);