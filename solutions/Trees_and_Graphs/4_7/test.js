const testWithSolution = function(title, solution) {
	test(title + ': ' + 
	'', () => {
		const input = {
			projects: ['a', 'b', 'c', 'd', 'e', 'f'],
			dependencies: [{'a': 'd'}, {'f': 'b'}, {'b': 'd'}, {'f': 'a'}, {'d': 'c'}],
		}
		const output = solution(input);
		expect(output).toStrictEqual(['f', 'e', 'a', 'b', 'd', 'c']);
	});
}

const Solution = require('./solution1');
testWithSolution('Solution1', Solution);