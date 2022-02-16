const testWithSolution = function(title, solution) {
	test(title + ':' + 
	'"aabcccccaaa" is compressed to "a2b1c5a3"', () => {
		expect(solution('aabcccccaaa')).toBe('a2b1c5a3');
	});
	test(title + ':' + 
	'"ilovethealgorithm" is compressed to "ilovethealgorithm"', () => {
		expect(solution('ilovethealgorithm')).toBe('ilovethealgorithm');
	});
	test(title + ':' + 
	'"generallyspeaking" is compressed to "generallyspeaking"', () => {
		expect(solution('generallyspeaking')).toBe('generallyspeaking');
	});
	test(title + ':' + 
	'"aabbcc" is compressed to "aabbcc"', () => {
		expect(solution('aabbcc')).toBe('aabbcc');
	});
	test(title + ':' + 
	'"" is compressed to ""', () => {
		expect(solution('')).toBe('');
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);
