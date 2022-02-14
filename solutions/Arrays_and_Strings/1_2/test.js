const testWithSolution = function(title, solution) {
  test(title + ': ' +
	'str "abcdefg" and "cbagfde" is unique ', () => {
		expect(solution('abcdefg', 'cbagfde')).toBe(true);
	});
  test(title + ': ' +
	'str "abcDefg" and "abcdefg" is not unique', () => {
		expect(solution('abcDefg', 'abcdefg')).toBe(false);
	});
  test(title + ': ' +
	'str "hijjkl" and "kljiih" is not unique', () => {
		expect(solution('hijjkl', 'kljiih')).toBe(false);
	});
	test(title + ': ' +
	'str "hijjkl" and "kljjih" is unique', () => {
		expect(solution('hijjkl', 'kljjih')).toBe(true);
	});
	test(title + ': ' +
	'str "o p q" and "p  qo" is unique', () => {
		expect(solution('o p q', 'p  qo')).toBe(true);
	});
	test(title + ': ' +
	'str "o p q" and "pqo" is not unique', () => {
		expect(solution('o p q', 'pqo')).toBe(false);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);