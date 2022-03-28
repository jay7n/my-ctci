const testWithSolution = function(title, BinaryTreeNode) {
	test(title + ': ' +
	'', () => {
		const root = new BinaryTreeNode(0);

		const n1 = root.addLeftChildByData(1);
		const n2 = root.addRightChildByData(2);

		const n11 = n1.addLeftChildByData(11);
		const n12 = n1.addRightChildByData(12);
		const n21 = n2.addLeftChildByData(21);
		const n22 = n2.addRightChildByData(22);

		const n111 = n11.addLeftChildByData(111);
		const n112 = n11.addRightChildByData(112);
		const n121 = n12.addLeftChildByData(121);
		const n122 = n12.addRightChildByData(122);
		const n211 = n21.addLeftChildByData(211);
		const n212 = n21.addRightChildByData(212);
		const n221 = n22.addLeftChildByData(221);
		const n222 = n22.addRightChildByData(222);

		expect(root.left.data).toBe(1);
		expect(root.left.left.data).toBe(11);
		expect(root.left.right.data).toBe(12);
		expect(root.right.data).toBe(2);
		expect(root.right.left.data).toBe(21);
		expect(root.right.right.data).toBe(22);
		expect(root.left.right.left.data).toBe(121);
		expect(root.right.left.right.data).toBe(212);

		const array = root.preOrderDfsToArray(root);
		console.log('array = ', array);
		expect(array).toStrictEqual([0, 1, 11, 111, 112, 12, 121, 122, 2, 21, 211, 212, 22, 221, 222]);
	});

}

const { BinaryTreeNode } = require('./solution1');
testWithSolution('Solution1', BinaryTreeNode);