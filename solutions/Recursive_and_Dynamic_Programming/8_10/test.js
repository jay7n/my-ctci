const testWithSolution = function(title, solution) {
  const X = 'X';
  test(title + 
  'test case 1', () => {
    const X = 'X';
    const pic = [
      0,5,4,2,
      3,1,5,5,
      3,5,1,5,
    ];
    expect(solution(pic.slice(), 4, 1, 1)).toStrictEqual([
      0,5,4,2,
      3,X,5,5,
      3,5,X,5,
    ]);
    expect(solution(pic.slice(), 4, 1, 0)).toStrictEqual([
      0,X,4,2,
      3,1,X,X,
      3,X,1,X,
    ]);
    // expect(solution(pic, 4, 1, 2)).toStrictEqual([
    //   0,X,4,2,
    //   3,1,X,X,
    //   3,5,1,X,
    // ]);
    // expect(solution(pic, 4, 0, 3)).toStrictEqual([
    //   0,5,4,X,
    //   3,1,5,5,
    //   3,5,1,5,
    // ]);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);