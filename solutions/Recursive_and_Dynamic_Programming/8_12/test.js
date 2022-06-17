const testWithSolution = function(title, solution) {
  test(title + 
  'test case 1', () => {
    const waysOfArranging = solution(8, 8);
    const X = 'X';
    const expected = [
`
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
`,
`
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0,
`,
`
0, 0, 0, X, 0, 0, 0, 0,
0, X, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, X,
0, 0, 0, 0, X, 0, 0, 0,
0, 0, 0, 0, 0, 0, X, 0,
X, 0, 0, 0, 0, 0, 0, 0,
0, 0, X, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, X, 0, 0,
`,
`
0, 0, 0, X, 0, 0, 0, 0,
0, X, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, X,
0, 0, 0, 0, 0, X, 0, 0,
X, 0, 0, 0, 0, 0, 0, 0,
0, 0, X, 0, 0, 0, 0, 0,
0, 0, 0, 0, X, 0, 0, 0,
0, 0, 0, 0, 0, 0, X, 0,
`,
    ];
    expect(waysOfArranging).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(waysOfArranging));
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);