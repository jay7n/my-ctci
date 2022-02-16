const testWithSolution = function(title, solution) {
	test(title + ': ' +
	'"pale" -> "ple" is one edit', () => {
		expect(solution('pale', 'ple')).toBe(true);
	});
	test(title + ': ' +
	'"pales" -> "pale" is one edit', () => {
		expect(solution('pales', 'pale')).toBe(true);
	});
	test(title + ': ' +
	'"pale" -> "bale" is one edit', () => {
		expect(solution('pale', 'bale')).toBe(true);
	});
	test(title + ': ' +
	'"pale" -> "bae" is not one edit', () => {
		expect(solution('pale', 'bae')).toBe(false);
	});
	test(title + ': ' +
	'"aaaaa" -> "aaaa" is one edit', () => {
		expect(solution('aaaaa', 'aaaa')).toBe(true);
	});
	test(title + ': ' +
	'"aaaaa" -> "aaa" is not one edit', () => {
		expect(solution('aaaaa', 'aaa')).toBe(false);
	});
	test(title + ': ' +
	'"" -> "a" is one edit', () => {
		expect(solution('', 'a')).toBe(true);
	});
	test(title + ': ' +
	'"a" -> "" is one edit', () => {
		expect(solution('a', 'b')).toBe(true);
	});
	test(title + ': ' +
	'"a" -> "b" is one edit', () => {
		expect(solution('a', 'b')).toBe(true);
	});
	test(title + ': ' +
	'"a" -> "" is one edit', () => {
		expect(solution('a', '')).toBe(true);
	});
	test(title + ': ' +
	'"a" -> "a" is not one edit', () => {
		expect(solution('a', 'a')).toBe(false);
	});
	test(title + ': ' +
	'"" -> "abc" is not one edit', () => {
		expect(solution('', '')).toBe(false);
	});
	test(title + ': ' +
	'"" -> "" is not one edit', () => {
		expect(solution('', '')).toBe(false);
	});
	test(title + ': ' +
	'"abcd f" -> "abc df" is not one edit', () => {
		expect(solution('', '')).toBe(false);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);