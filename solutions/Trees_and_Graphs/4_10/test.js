const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');

const testWithSolution = function(title, solution) {
	test(title + ': ' + 
	'T2 is subtree of T1', () => {
		const T1 = new BinaryTreeNode(0);
		buildTree(T1, 8);
		console.log(T1.preOrderDfsToArray(T1));

		const T2 = new BinaryTreeNode('t');
		buildTree(T2, 1);
		console.log(T2.preOrderDfsToArray(T2));

		const res = solution(T2, T1);
		expect(res).toBe(true);
	});

	test(title + ': ' + 
	'T2 is not subtree of T1', () => {
		const T1 = new BinaryTreeNode(0);
		buildTree(T1, 8);
		console.log(T1.preOrderDfsToArray(T1));

		const T2 = new BinaryTreeNode(0);
		buildTree(T2, 1);
		console.log(T2.preOrderDfsToArray(T2));

		const res = solution(T2, T1);
		expect(res).toBe(false);
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