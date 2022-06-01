const testDistinctWithSolution = function(title, solution) {
  test(title + '' + 
  'test case 1', () => {
    expect(solution([-5, -2, 0, 2, 4, 10, 20, 100])).toBe(4);
    expect(solution([-100, -50, -40, -30, -20, -10, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29])).toBe(13);
  });
}

const testNonDistinctWithSolution = function(title, solution) {
  test(title + '' + 
  'test case 1', () => {
    expect(solution([1, 2, 2, 3, 4, 10, 20, 100])).toBe(2);
    expect(solution([-100, 2, 3, 3, 3, 4, 6, 7, 7, 8, 9, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29])).toBe(3);
  });
}

const Solution1 = require('./solution1');
const Solution2Distinct = require('./solution2_distinct');
const Solution3NonDistinct = require('./solution3_nondistinct');

testDistinctWithSolution('Solution1_Distinct', Solution1);
testDistinctWithSolution('Solution2_Distinct', Solution2Distinct);

testDistinctWithSolution('Solution1_NonDistinct', Solution1);
// testNonDistinctWithSolution('Solution3_NonDistinct', Solution3NonDistinct);
