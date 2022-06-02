const testDistinctWithSolution = function(title, solution) {
  test(title + 
  '', () => {
    const subSet = solution([1,2,3]);
    const expected = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]];
    expect(subSet).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(subSet));
  });
}


const Solution1 = require('./solution1');
testDistinctWithSolution('Solution1', Solution1);