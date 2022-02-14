const testWithSolution = function(solution) {
  test('str "abcdefg" is unique', () => {
    expect(solution('abcdefg')).toBe(true);
  });

  test('str "hijjkll" isn\'t unique', () => {
    expect(solution('hijjkll')).toBe(false);
  });

  test('str "" is unique', () => {
    expect(solution('')).toBe(true);
  });

  test('str " t " isn\'t unique', () => {
    expect(solution(' t ')).toBe(false);
  });

  test('str "\n\t" is unique', () => {
    expect(solution('\n\t')).toBe(true);
  });
}

const Solution1 = require('./solution1');
const Solution2 = require('./solution2');
testWithSolution(Solution1);
testWithSolution(Solution2);