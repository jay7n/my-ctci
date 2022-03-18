const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');

const testWithSolution = function(title, solution) {
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

		const lists = solution(root);
		expects(lists[0].toArray()).toStrictEqual([0]);
		expects(lists[1].toArray()).toStrictEqual([1,2]);
		expects(lists[2].toArray()).toStrictEqual([11,12,21,22]);
		expects(lists[3].toArray()).toStrictEqual([111,112,121,122,211,212,221,222]);
	});
}

const Solution = require('./solution1');
testWithSolution('Solution1', Solution);