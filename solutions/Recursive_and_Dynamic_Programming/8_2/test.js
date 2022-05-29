const testWithSolution = function(title, solution) {
  test(title + '' + 
  '', () => {
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
}


const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);