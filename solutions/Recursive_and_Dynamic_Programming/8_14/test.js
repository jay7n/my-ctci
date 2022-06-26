const testWithSolution = function(title, solution) {
  test(title + 
  ' test case 0', () => {

  });
  test(title + 
  ' test case 1', () => {
    const ways = solution('1^0|0|1', false);
    expect(ways).toBe(2);
  });
  test(title + 
  ' test case 2', () => {
    const ways = solution('0&0&0&1^1|0', true);
    expect(ways).toBe(10);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);