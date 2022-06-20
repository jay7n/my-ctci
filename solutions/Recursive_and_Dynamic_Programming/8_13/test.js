const testWithSolution = function(title, solution) {
  const boxes = [
    [ 1,  2,  3 ], // w, h, d
    [ 2,  3,  4 ],
    [ 10, 4,  6 ],
    [ 4,  7,  2 ],
  ];

  const possibleTallestHeight = solution(boxes);
  expect(possibleTallestHeight).toBe();
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);