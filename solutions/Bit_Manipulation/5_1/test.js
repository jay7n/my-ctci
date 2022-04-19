const testWithSolution = function(title, solution) {
  test(title + ':' +
  '', () => {
    const N = 10000000000;
    const M = 10011;
    const i = 2;
    const j = 6;

    const res = solution(N, M, i, j);
    expect(res).toBe(10001001100);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);