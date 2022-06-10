const testWithSolution = function(title, solution) {
  test(title + 
  'test case 1', () => {
    const allParentheses = solution(1);
    const expected = ['()'];
    expect(allParentheses).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(allParentheses));
  });
  test(title + 
  'test case 1', () => {
    const allParentheses = solution(2);
    const expected = ['()()', '(())'];
    expect(allParentheses).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(allParentheses));
  });
  test(title + 
  'test case 3', () => {
    const allParentheses = solution(3);
    const expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
    expect(allParentheses).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(allParentheses));
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);