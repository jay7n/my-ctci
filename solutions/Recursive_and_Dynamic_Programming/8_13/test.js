const testWithSolution = function(title, solution) {
  test(title + 
  'test case 1', () => {
    const boxes = [
      // w, h, d
      [1, 2, 3],
    ];

    const possibleTallestHeight = solution(boxes);
    expect(possibleTallestHeight).toBe(2);
  });

  test(title + 
  'test case 2', () => {
    const boxes = [
      // w, h, d
      [1, 2, 3],
      [2, 3, 4],
    ];

    const possibleTallestHeight = solution(boxes);
    expect(possibleTallestHeight).toBe(5);
  });

  test(title + 
  'test case 3', () => {
    const boxes = [
      // w, h, d
      [1, 2, 3],
      [2, 3, 4],
      [10, 4, 6],
      // [4, 7, 2],
    ];

    const possibleTallestHeight = solution(boxes);
    expect(possibleTallestHeight).toBe(9);
  });

  test(title + 
  'test case 3', () => {
    const boxes = [
      // w, h, d
      [1, 2, 3],
      [2, 3, 4],
      [10, 4, 6],
      [4, 7, 5],
    ];

    const possibleTallestHeight = solution(boxes);
    expect(possibleTallestHeight).toBe(12);
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);