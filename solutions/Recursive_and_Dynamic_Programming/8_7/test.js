const testWithSolution = function(title, solution) {
  test(title + 
  'test case 1', () => {
    const allPermutations = solution('ab');
    const expected = ['ab', 'ba'];
    expect(allPermutations).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(allPermutations));
  });
  test(title + 
  'test case 2', () => {
    const allPermutations = solution('abc');
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    expect(allPermutations).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(allPermutations));
  });
  test(title + 
  'test case 3', () => {
    const allPermutations = solution('abcd');
    const expected = ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'];
    expect(allPermutations).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(allPermutations));
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);
