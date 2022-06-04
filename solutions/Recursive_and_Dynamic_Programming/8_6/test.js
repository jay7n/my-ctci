const testDistinctWithSolution = function(title, solution) {
  test(title + 
  'test case 1', () => {
    const tower1 = [
      1,
      22,
      333,
      4444,
      55555,
      666666,
    ];
    const tower2 = [];
    const tower3 = [];
    solution(tower1, tower2, tower3);
    expect(tower1).toStrictEqual([]);
    expect(tower2).toStrictEqual([]);
    expect(tower3).toStrictEqual([
      1,
      22,
      333,
      4444,
      55555,
      666666,
    ]);
  });
}

const Solution1 = require('./solution1');
testDistinctWithSolution('Solution1', Solution1);