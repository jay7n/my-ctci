const testWithSolution = function(title, Solution) {
	test(title + ': ' + 
	'the height of BST for [1,2,3,4,5] is 3', function() {
		const array = [1, 2, 3, 4, 5];
		const bst = new Solution(array);
		expect(bst.toArray()).toStrictEqual(array);
		expect(bst.height).toBe(3);
	});
	test(title + ': ' + 
	'the height of BST for [1,2,3,4] is 3', function() {
		const array = [1, 2, 3, 4];
		const bst = new Solution(array);
		expect(bst.toArray()).toStrictEqual(array);
		expect(bst.height).toBe(3);
	});
	test(title + ': ' + 
	'the height of BST for [1,2,3] is 2', function() {
		const array = [1, 2, 3];
		const bst = new Solution(array);
		expect(bst.toArray()).toStrictEqual(array);
		expect(bst.height).toBe(2);
	});
	test(title + ': ' + 
	'the height of BST for [1,2] is 2', function() {
		const array = [1, 2];
		const bst = new Solution(array);
		expect(bst.toArray()).toStrictEqual(array);
		expect(bst.height).toBe(2);
	});
	test(title + ': ' + 
	'the height of BST for [1] is 1', function() {
		const array = [1];
		const bst = new Solution(array);
		expect(bst.toArray()).toStrictEqual(array);
		expect(bst.height).toBe(1);
	});
	test(title + ': ' + 
	'the height of BST for [] is 0', function() {
		const array = [];
		const bst = new Solution(array);
		expect(bst.toArray()).toStrictEqual(array);
		expect(bst.height).toBe(0);
	});
}

const Solution = require('./solution1');
testWithSolution('Solution1', Solution);