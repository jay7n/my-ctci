const Bits = require('../../../datastructures/Bits/solution1');

const testWithSolution = function(title, solution) {
  test(title + ': ' + 
  '', () => {
    expect(solution(1775)).toBe(8);
    expect(solution(Bits.printBitsAsNum('011011'))).toBe(5);
    expect(solution(Bits.printBitsAsNum('011011001'))).toBe(5);
    expect(solution(Bits.printBitsAsNum('01101101111001'))).toBe(7);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);