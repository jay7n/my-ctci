const testWithSolution = function(title, solution) {
  test(title + 
  'test case 1', () => {
    const waysOfCents = solution(1);
    const expected = ['1'];
    expect(waysOfCents).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(waysOfCents));
  });
  test(title + 
  'test case 2', () => {
    const waysOfCents = solution(5);
    const expected = ['1,1,1,1,1', '5'];
    expect(waysOfCents).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(waysOfCents));
  });
  test(title + 
  'test case 3', () => {
    const waysOfCents = solution(9);
    const expected = ['1,1,1,1,1,1,1,1,1', '5,1,1,1,1'];
    expect(waysOfCents).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(waysOfCents));
  });
  test(title + 
  'test case 4', () => {
    const waysOfCents = solution(12);
    const expected = ['1,1,1,1,1,1,1,1,1,1,1,1', '5,1,1,1,1,1,1,1', '5,5,1,1', '10,1,1'];
    expect(waysOfCents).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(waysOfCents));
  });
  test(title + 
  'test case 5', () => {
    const waysOfCents = solution(30);
    const expected = [
        '25,5',
        '25,1,1,1,1,1',
        '10,10,5,5',
        '10,10,5,1,1,1,1,1',
        '10,10,1,1,1,1,1,1,1,1,1,1',
        '10,5,5,5,5',
        '10,5,5,5,1,1,1,1,1',
        '10,5,5,1,1,1,1,1,1,1,1,1,1',
        '10,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1',
        '10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1',
        '5,5,5,5,5,5',
        '5,5,5,5,5,1,1,1,1,1',
        '5,5,5,5,1,1,1,1,1,1,1,1,1,1',
        '5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1',
        '5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1',
        '5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1',
        '1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1',
        '10,10,10'
    ];
    expect(waysOfCents).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(waysOfCents));
  });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);