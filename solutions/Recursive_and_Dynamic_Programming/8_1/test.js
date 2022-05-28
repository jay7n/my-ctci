
const testWithSolution = function(title, solution) {
  test(title + '' + 
  '', () => {
    expect(solution(1)).toBe(1);
    expect(solution(2)).toBe(1);
    expect(solution(3)).toBe(1);
    expect(solution(4)).toBe(6);
    expect(solution(10)).toBe();
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);