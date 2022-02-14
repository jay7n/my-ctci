const testWithSolution = function(solution) {
  test('str "Mr John Smith    " with length=13 is replaced as "Mr%20John%20Smith" ', () => {
    const res = solution('Mr John Smith    ', 13);
    expect(res).toBe("Mr%20John%20Smith");
  });
}

const Solution1 = require('./solution1');
testWithSolution(Solution1);