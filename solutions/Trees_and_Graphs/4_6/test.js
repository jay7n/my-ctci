const { BinaryTreeNode } = require('../../../datastructures/Tree/solution1');

const testWithSolution = function (title, solution) {
	test(title + ': ' + 
	'', () => {
		const n3 = new BinaryTreeNode(3);
		const n1 = n3.addLeftChildByData(1);
		const n2 = n1.addRightChildByData(2);
		const n5 = n3.addRightChildByData(5);
		const n4 = n5.addLeftChildByData(4);

		expect(solution(n1)).toBe(n2);
		expect(solution(n2)).toBe(n3);
		expect(solution(n3)).toBe(n4);
		expect(solution(n4)).toBe(n5);
		expect(solution(n5)).toBe(null);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);