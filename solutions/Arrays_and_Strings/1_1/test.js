const testWithSolution = function(title, solution) {
  test(title + ': ' +
  'str "abcdefg" is unique', () => {
    expect(solution('abcdefg')).toBe(true);
  });

  test(title + ': ' +
  'str "hijjkll" isn\'t unique', () => {
    expect(solution('hijjkll')).toBe(false);
  });

  test(title + ': ' +
  'str "" is unique', () => {
    expect(solution('')).toBe(true);
  });

  test(title + ': ' +
  'str " t " isn\'t unique', () => {
    expect(solution(' t ')).toBe(false);
  });

  test(title + ': ' +
  'str "\n\t" is unique', () => {
    expect(solution('\n\t')).toBe(true);
  });
}

const Solution1 = require('./solution1');
const Solution2 = require('./solution2');
testWithSolution('Solution1', Solution1);
testWithSolution('Solution2', Solution2);