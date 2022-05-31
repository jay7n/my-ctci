const testWithSolution = function(title, solution) {
  test(title + '' + 
  'test case 1', () => {
    expect(solution([-5, -2, 0, 2, 4, 10, 20, 100])).toBe(4);
    expect(solution([-100, -50, -40, -30, -20, -10, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29])).toBe(13);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);