const testWithSolution = function(title, BinaryTreeNode) {
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
	const n122 = n12.addLeftChildByData(122);
	const n211 = n21.addLeftChildByData(211);
	const n212 = n21.addLeftChildByData(212);
	const n221 = n22.addLeftChildByData(221);
	const n222 = n22.addLeftChildByData(222);

}

const { BinaryTreeNode } = require('./solution1');
testWithSolution('Solution1', BinaryTreeNode);