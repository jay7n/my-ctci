const testWithSolution = function(title, solution) {
	test(title + ': ' + 
	'', () => {
		const input = {
			projects: ['a', 'b', 'c', 'd', 'e', 'f'],
			dependencies: [{'a': 'd'}, {'f': 'b'}, {'b': 'd'}, {'f': 'a'}, {'d': 'c'}],
		}
		const output = solution(input);
		console.log('output = ', output);
		const idx_a = output.findIndex(e => e == 'a');
		const idx_b = output.findIndex(e => e == 'b');
		const idx_c = output.findIndex(e => e == 'c');
		const idx_d = output.findIndex(e => e == 'd');
		const idx_e = output.findIndex(e => e == 'e');
		const idx_f = output.findIndex(e => e == 'f');

		expect(idx_c > idx_d).toBe(true);
		expect(idx_d > idx_a).toBe(true);
		expect(idx_d > idx_b).toBe(true);
		expect(idx_a > idx_f).toBe(true);
		expect(idx_a > idx_f).toBe(true);
		expect(idx_b > idx_f).toBe(true);
		expect(idx_e).not.toBe(-1);

	});
}

const Solution = require('./solution1');
testWithSolution('Solution1', Solution);