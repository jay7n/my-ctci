const { Stack } = require('../../../datastructures/Stack/solution1');

const testWithSolution = function (title, solution) {
  test(title +
    'test case 1', () => {
      const tower1 = new Stack().fromArray([
        1,
        22,
      ].reverse());
      const tower2 = new Stack();
      const tower3 = new Stack();
      solution(tower1, tower2, tower3);
      expect(tower1.isEmpty()).toBe(true);
      expect(tower2.isEmpty()).toBe(true);
      expect(tower3.popToArray()).toStrictEqual([
        1,
        22,
      ]);
    });
  test(title + 
  'test case 2', () => {
    const tower1 = new Stack().fromArray([
      1,
      22,
      333,
    ].reverse());
    const tower2 = new Stack();
    const tower3 = new Stack();
    solution(tower1, tower2, tower3);
    expect(tower1.isEmpty()).toBe(true);
    expect(tower2.isEmpty()).toBe(true);
    expect(tower3.popToArray()).toStrictEqual([
      1,
      22,
      333,
    ]);
  });
  test(title + 
  'test case 3', () => {
    const tower1 = new Stack().fromArray([
      1,
      22,
      333,
      4444,
      55555,
      666666,
    ].reverse());
    const tower2 = new Stack();
    const tower3 = new Stack();
    solution(tower1, tower2, tower3);
    expect(tower1.isEmpty()).toBe(true);
    expect(tower2.isEmpty()).toBe(true);
    expect(tower3.popToArray()).toStrictEqual([
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
testWithSolution('Solution1', Solution1);