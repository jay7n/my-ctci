const testWithSolution = function(title, solution) {
  test(title + ': ' +
  'str "Mr John Smith    " with length=13 is replaced as "Mr%20John%20Smith" ', () => {
    const res = solution('Mr John Smith    ', 13);
    expect(res).toBe("Mr%20John%20Smith");
  });
  test(title + ': ' +
  'str "Mr John Smith" with length=13 is replaced as "Mr%20John%20Smith" ', () => {
    const res = solution('Mr John Smith', 13);
    expect(res).toBe("Mr%20John%20Smith");
  });
  test(title + ': ' +
  'str "Mr John Smith" with length=4 is replaced as "Mr%20J" ', () => {
    const res = solution('Mr John Smith', 4);
    expect(res).toBe("Mr%20J");
  });
  test(title +': ' +
  'str "Mr John Smith" with length=3 is replaced as "Mr%20J" ', () => {
    const res = solution('Mr John Smith', 3);
    expect(res).toBe("Mr%20");
  });
  test(title +': ' +
  'str " Mr John Smith" with length=1 is replaced as "%20" ', () => {
    const res = solution(' Mr John Smith', 1);
    expect(res).toBe("%20");
  });
  test(title +': ' +
  'str "  Mr Jo   hn " with length=9 is replaced as "%20%20Mr%20Jo%20%20" ', () => {
    const res = solution('  Mr Jo   hn ', 9);
    expect(res).toBe("%20%20Mr%20Jo%20%20");
  });
  test(title +': ' +
  'str "  Mr Jo   hn " with length=900` is replaced as "%20%20Mr%20Jo%20%20%20hn%20" ', () => {
    const res = solution('  Mr Jo   hn ', 900);
    expect(res).toBe("%20%20Mr%20Jo%20%20%20hn%20");
  });
  test(title +': ' +
  'str "  Mr Jo   hn " with length=0` is replaced as "" ', () => {
    const res = solution('  Mr Jo   hn ', 0);
    expect(res).toBe("");
  });
  test(title +': ' +
  'str "" with length=900` is replaced as "" ', () => {
    const res = solution('', 900);
    expect(res).toBe("");
  });
}

const Solution1 = require('./solution1');
const Solution2 = require('./solution2');
testWithSolution('Solution1', Solution1);
testWithSolution('Solution2', Solution2);