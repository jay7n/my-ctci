const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');
const testWithSolution = function(title, solution) {
	test(title + ': ' + 
	'', () => {
		const root = new BinaryTreeNode(2);
		root.addLeftChildByData(1);
		root.addLeftChildByData(3);

		const allArrays = solution(root);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);