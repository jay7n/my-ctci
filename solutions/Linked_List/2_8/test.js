const { LinkedList, LinkedListNode } = require('../../../datastructures/LinkedList/solution1');

const testWitSolution = function(title, solution) {
	test(title + ': ' +
	'', () => {
		const linkedList = new LinkedList();
		linkedList.addNode(new LinkedListNode('A'));
		linkedList.addNode(new LinkedListNode('B'));
		const nodeC = linkedList.addNode(new LinkedListNode('C'));
		linkedList.addNode(new LinkedListNode('D'));
		linkedList.addNode(new LinkedListNode('E'));
		linkedList.addNode(nodeC);

		expect(solution(linkedList)).toBe(nodeC);
	});
}

const Solution1 = require('./solution1');
testWitSolution('Solution1', Solution1);
