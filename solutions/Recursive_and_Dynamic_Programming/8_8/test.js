const testWithSolution = function(title, solution) {
  test(title + 
  'test case 1', () => {
    const allPermutations = solution('cba');
    const expected = ['aab', 'aba', 'baa'];
    expect(allPermutations).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(allPermutations));
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);