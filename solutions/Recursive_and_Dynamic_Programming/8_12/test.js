const testWithSolution = function(title, solution) {
  test(title + 
  'test case 1', () => {
    const waysOfArranging = solution(8, 8);
    expect(waysOfArranging).toEqual(92);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);