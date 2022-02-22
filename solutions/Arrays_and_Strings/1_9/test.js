const testWithSolution = function(title, solution) {
	test(title + ':' + 
	'"waterbottle" is a rotation of "erbottlewat"', () => {
		expect(solution('waterbottle', 'erbottlewat')).toBe(true);
	});
	test(title + ':' + 
	'"abcdefg" is not a rotation of "cdefgh"', () => {
		expect(solution('abcdefg', 'cdefgh')).toBe(false);
	});
	test(title + ':' + 
	'"abcdefg" is not a rotation of "abdcefg"', () => {
		expect(solution('abcdefg', 'abdcefg')).toBe(false);
	});
	test(title + ':' + 
	'"abcabc" is a rotation of "bcabca"', () => {
		expect(solution('abcabc', 'bcabca')).toBe(true);
	});
	test(title + ':' + 
	'"aaa" is a rotation of "aaa"', () => {
		expect(solution('aaa', 'aaa')).toBe(true);
	});
	test(title + ':' + 
	'"abc" is a rotation of "abc"', () => {
		expect(solution('abc', 'abc')).toBe(true);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);