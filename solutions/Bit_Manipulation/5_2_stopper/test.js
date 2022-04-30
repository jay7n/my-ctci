
const testWithSolution = function(title, solution) {
  test(title + ': ' + 
  '', () => {
    expect(solution(0.5)).toBe('1');
    expect(solution(0.25)).toBe('01');
    expect(solution(0.125)).toBe('001');
    expect(solution(0.0625)).toBe('0001');
    expect(solution(0.9375)).toBe('1111');
    expect(solution(0.5625)).toBe('1001');
    expect(solution(0.1)).toBe('ERROR');
    expect(solution(0.2)).toBe('ERROR');
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);