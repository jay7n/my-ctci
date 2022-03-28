const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');

const testWithSolution = function(title, solution) {
	test(title + ': ' + 
	'', () => {
		const T1 = new BinaryTreeNode(0);
		buildTree(T1, 8);
		console.log(T1.preOrderDfsToArray(T1));

		const T2 = new BinaryTreeNode('t');
		buildTree(T2, 1);
		console.log(T2.preOrderDfsToArray(T2));

		const res = solution(T2, T1);
		expect(res).toBe(true);
	});
}

function buildTree(tNode, maxDepth, depth = 0) {
	if (depth < maxDepth) {
		tNode.addLeftChildByData('t');
		tNode.addRightChildByData('t');
		buildTree(tNode.left, maxDepth, depth+1);
		buildTree(tNode.right, maxDepth, depth+1);
	}
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);