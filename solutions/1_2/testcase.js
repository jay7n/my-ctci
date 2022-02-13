exports.testWithSolution = function(solution) {
	test('str "abcdefg" and "cbagfde" is unique ', () => {
		expect(solution('abcdefg', 'cbagfde')).toBe(true);
	});
	test('str "abcDefg" and "abcdefg" is not unique', () => {
		expect(solution('abcDefg', 'abcdefg')).toBe(false);
	});
	test('str "hijjkl" and "kljiih" is not unique', () => {
		expect(solution('hijjkl', 'kljiih')).toBe(false);
	});
	test('str "hijjkl" and "kljjih" is unique', () => {
		expect(solution('hijjkl', 'kljjih')).toBe(true);
	});
	test('str "o p q" and "p  qo" is unique', () => {
		expect(solution('o p q', 'p  qo')).toBe(true);
	});
	test('str "o p q" and "pqo" is not unique', () => {
		expect(solution('o p q', 'pqo')).toBe(false);
	});
}