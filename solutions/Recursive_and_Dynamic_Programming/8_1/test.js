const testWithSolution = function(title, solution) {
  test(title + '' + 
  '', () => {
    expect(solution(1)).toBe(1);
    expect(solution(2)).toBe(1);
    expect(solution(3)).toBe(1);
    expect(solution(4)).toBe(6);
    expect(solution(5)).toBe(11);
    expect(solution(6)).toBe(21);
    expect(solution(10)).toBe(261);
    expect(solution(36)).toBe(1994227686);
  });
}

const Solution1 = require('./solution1');
const Solution2 = require('./solution2');
const Solution3 = require('./solution3');
const Solution4 = require('./solution4');
testWithSolution('Solution1', Solution1);
testWithSolution('Solution2', Solution2);
testWithSolution('Solution3', Solution3);
testWithSolution('Solution4', Solution4);