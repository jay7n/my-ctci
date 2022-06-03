const testDistinctWithSolution = function(title, solution) {
  test(title + 
  'test case 1', () => {
    const subSet = solution([1,2]);
    const expected = [
      [], [1], [2], [1,2], 
    ];
    expect(subSet).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(subSet));
  });
  test(title + 
  'test case 2', () => {
    const subSet = solution([1,2,3]);
    const expected = [
      [], [1], [2], [3], 
      [1,2], [1,3], [2,3], [1,2,3]
    ];
    expect(subSet).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(subSet));
  });
  test(title + 
  'test case 3', () => {
    const subSet = solution([1,2,3,4]);
    const expected = [
      [], [1], [2], [3], 
      [4], [1,2], [1,3], [1,4], 
      [2,3], [2,4], [3,4],[1,2,3], 
      [1,2,4], [1,3,4], [2,3,4],[1,2,3,4]
    ];
    expect(subSet).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(subSet));
  });
}


const Solution1 = require('./solution1');
testDistinctWithSolution('Solution1', Solution1);

const Solution2 = require('./solution2');
testDistinctWithSolution('Solution2', Solution2);

const Solution3 = require('./solution3_killed_me');
testDistinctWithSolution('Solution3', Solution3);