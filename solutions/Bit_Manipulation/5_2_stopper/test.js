
const testWithSolution = function(title, solution) {
  test(title + ': ' + 
  '', () => {
    expect(solution(0.5)).toBe('1');
    expect(solution(0.25)).toBe('01');
    expect(solution(0.125)).toBe('001');
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);