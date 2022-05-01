const testWithSolution = function(title, solution) {
  test(title + ': ' + 
  '', () => {
    expect(solution(1775)).toBe(8);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);