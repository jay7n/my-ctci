const testDistinctWithSolution = function(title, solution) {
  test(title + 
  '', () => {
    expect(solution(1,1)).toBe(1);
    expect(solution(2,3)).toBe(6);
    expect(solution(11,33)).toBe(363);
    expect(solution(128,5435)).toBe(695680);
  });
}

const Solution1 = require('./solution1');
testDistinctWithSolution('Solution1', Solution1);