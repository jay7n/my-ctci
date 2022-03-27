const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');
const testWithSolution = function(title, BSTSequences) {
	test(title + ': ' +
	'test solution GetWeavedArrays', () => {
		let array1 = [1,2];
		let array2 = [3,4];
		const weavedArrays = BSTSequences.GetWeavedArrays(array1, array2);
		console.log('weavedArrays = ', weavedArrays);
	});

	// test(title + ': ' + 
	// 'test solution getTNodeSeq', () => {
	// 	const root = new BinaryTreeNode(2);
	// 	root.addLeftChildByData(1);
	// 	root.addLeftChildByData(3);

	// 	const bstSeq = new BSTSequences(root);

	// 	bstSeq.getTNodeSeq(root);

	// 	// const allArrays = bstSeq.getAllSequences().map(arr => arr.join());
	// 	// allArrays.includes('2,1,3');
	// 	// allArrays.includes('2,3,1');

	// });
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);