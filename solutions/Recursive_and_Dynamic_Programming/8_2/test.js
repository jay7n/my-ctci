const testWithSolution = function(title, solution) {
  test(title + '' + 
  'test case 1', () => {
    const maze = [
      0, 1, 0,
      0, 1, 0,
      0, 0, 0,
    ];
    const allPaths = solution(3, maze);
    const execpted = [
      '(0,0)->(0,1)->(0,2)->(1,2)->(2,2)'
    ];
    expect(allPaths).toEqual(expect.arrayContaining(execpted));
    expect(execpted).toEqual(expect.arrayContaining(allPaths));
  });

  test(title + '' + 
  'test case 2', () => {
    const maze = [
      0, 1, 0,
      0, 0, 0,
      0, 0, 0,
    ];
    const allPaths = solution(3, maze);
    const execpted = [
      '(0,0)->(0,1)->(0,2)->(1,2)->(2,2)',
      '(0,0)->(0,1)->(1,1)->(1,2)->(2,2)',
      '(0,0)->(0,1)->(1,1)->(2,1)->(2,2)',
    ];
    expect(allPaths).toEqual(expect.arrayContaining(execpted));
    expect(execpted).toEqual(expect.arrayContaining(allPaths));
  });
}


const Solution1 = require('./solution1');
const Solution2 = require('./solution2');
testWithSolution('Solution1', Solution1);
testWithSolution('Solution2', Solution2);