const testWithSolution = function(title, solution) {
	test(title + ': ' +
	'str "tacoocat" is a permutation of a palindrome', () => {
		const res = solution('tacoocat');
		expect(res).toBe(true);
	});
	test(title + ': ' +
	'str "abc" is not a permutation of a palindrome', () => {
		const res = solution('abc');
		expect(res).toBe(false);
	});
	test(title + ': ' +
	'str "aab" is a permutation of a palindrome', () => {
		const res = solution('aab');
		expect(res).toBe(true);
	});
	test(title + ': ' +
	'str "bb aa" is a permutation of a palindrome', () => {
		const res = solution('bb aa');
		expect(res).toBe(true);
	});
	test(title + ': ' +
	'str "bab   ba" is not a permutation of a palindrome', () => {
		const res = solution('"bab   ba');
		expect(res).toBe(false);
	});
	test(title + ': ' +
	'str "aabcbba" is not a permutation of a palindrome', () => {
		const res = solution('aabcbba');
		expect(res).toBe(false);
	});
	test(title + ': ' +
	'str "aaa" is a permutation of a palindrome', () => {
		const res = solution('aaa');
		expect(res).toBe(true);
	});
	test(title + ': ' +
	'str "aaaaaa" is a permutation of a palindrome', () => {
		const res = solution('aaaaaa');
		expect(res).toBe(true);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);