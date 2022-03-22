const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');
const testWithSolution = function(title, solution) {
	test(title + ': ' + 
	'', () => {
		const root = new BinaryTreeNode(2);
		root.addLeftChildByData(1);
		root.addLeftChildByData(3);

		const allArrays = solution(root).map(arr => arr.join());
		allArrays.includes('2,1,3');
		allArrays.includes('2,3,1');

	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);