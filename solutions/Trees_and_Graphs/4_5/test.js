const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');

const testWithSolution = function(title, solution) {
	test(title + ': ' +
	'1. This tree is a BST', () => {
		const n3 = new BinaryTreeNode(3);
		const n1 = n3.addLeftChildByData(1);
		const n2 = n1.addRightChildByData(2);
		const n5 = n3.addRightChildByData(5);
		const n4 = n5.addLeftChildByData(4);

		const isBST = solution(n3);
		expect(isBST).toBe(true);
	});
	test(title + ': ' +
	'2. This tree is a BST', () => {
		const n3 = new BinaryTreeNode(-3);
		const n1 = n3.addLeftChildByData(-1);
		const n2 = n1.addRightChildByData(-2);
		const n5 = n3.addRightChildByData(-5);
		const n4 = n5.addLeftChildByData(-4);

		const isBST = solution(n3);
		expect(isBST).toBe(true);
	});
	test(title + ': ' +
	'3. This tree is a BST', () => {
		const n3 = new BinaryTreeNode(3);
		const n1 = n3.addLeftChildByData(5);
		const n2 = n1.addRightChildByData(4);
		const n5 = n3.addRightChildByData(1);
		const n4 = n5.addLeftChildByData(2);

		const isBST = solution(n3);
		expect(isBST).toBe(true);
	});
	test(title + ': ' +
	'4. This tree is a BST', () => {
		const n3 = new BinaryTreeNode(3);
		const n2 = n3.addLeftChildByData(2);
		const n1 = n2.addLeftChildByData(1);
		const n5 = n3.addRightChildByData(5);
		const n4 = n5.addLeftChildByData(4);

		const isBST = solution(n3);
		expect(isBST).toBe(true);
	});
	test(title + ': ' +
	'5. This tree is a BST', () => {
		const n3 = new BinaryTreeNode(3);
		const n2 = n3.addLeftChildByData(2);
		const n1 = n2.addLeftChildByData(1);
		const n4 = n3.addRightChildByData(4);
		const n5 = n4.addRightChildByData(5);

		const isBST = solution(n3);
		expect(isBST).toBe(true);
	});
	test(title + ': ' +
	'6. This tree is not a BST', () => {
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

		const isBST = solution(root);
		expect(isBST).toBe(false);
	});
}

const Solution1 = require('./solution1');
const Solution2 = require('./solution2');
testWithSolution('Solution1', Solution1);
testWithSolution('Solution2', Solution2);