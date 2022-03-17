const testWithSolution = function(title, Solution) {
	test(title + ': ' + 
	'', function() {
		const array = [1, 2, 3, 4, 5];
		const bst = new Solution(array);
		expect(bst.toArray()).toStrictEqual(array);
		expect(bst.height).toBe(4);
	});
}

const Solution = require('./solution1');
testWithSolution('Solution1', Solution);