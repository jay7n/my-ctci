const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');

const testWithSoution = function (title, solution) {
	test(title + ': ' +
	'', () => {
		const n3 = new BinaryTreeNode(3);
		const n1 = n3.addLeftChildByData(1);
		const n2 = n1.addRightChildByData(2);
		const n5 = n3.addRightChildByData(5);
		const n4 = n5.addLeftChildByData(4);
		const n6 = n1.addLeftChildByData(6);
		const n8 = n6.addLeftChildByData(8);
		const n10 = n6.addRightChildByData(10);
		const n7 = n5.addRightChildByData(7);
		const n9 = n4.addLeftChildByData(9);
		const n11 = n4.addRightChildByData(11);
		const n12 = n7.addRightChildByData(12);
		const nxx = new BinaryTreeNode(10);

		expect(solution(n1, n5)).toBe(n3);
		expect(solution(n1, n2)).toBe(n1);
		expect(solution(n1, n1)).toBe(n1);
		expect(solution(n8, n10)).toBe(n6);
		expect(solution(n6, n10)).toBe(n6);
		expect(solution(n10, n2)).toBe(n1);
		expect(solution(n6, n5)).toBe(n3);
		expect(solution(n8, n11)).toBe(n3);
		expect(solution(n9, n12)).toBe(n5);

		expect(solution(n6, nxx)).toBe(null);
	});
}

const Solution1 = require('./solution1');
testWithSoution('Solution1', Solution1);