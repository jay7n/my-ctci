const { LinkedList, LinkedListNode } = require('../../../datastructures/LinkedList/solution1');

const testWitSolution = function(title, solution) {
	test(title + ': ' +
	'linkedList {A,B,C,D,E,C} has a loop and the loop start is {C}', () => {
		const linkedList = new LinkedList();
		linkedList.addNode(new LinkedListNode('A'));
		linkedList.addNode(new LinkedListNode('B'));
		const nodeC = linkedList.addNode(new LinkedListNode('C'));
		linkedList.addNode(new LinkedListNode('D'));
		linkedList.addNode(new LinkedListNode('E'));
		linkedList.addNode(nodeC);

		expect(solution(linkedList)).toBe(nodeC);
	});
	test(title + ': ' +
	'linkedList {A,B,C,D,E} hasn\'t any loop', () => {
		const linkedList = new LinkedList();
		linkedList.addNode(new LinkedListNode('A'));
		linkedList.addNode(new LinkedListNode('B'));
		const nodeC = linkedList.addNode(new LinkedListNode('C'));
		linkedList.addNode(new LinkedListNode('D'));
		linkedList.addNode(new LinkedListNode('E'));

		expect(solution(linkedList)).toBe(null);
	});
	test(title + ': ' +
	'linkedList {A,B,C,D,E,F,G,H,I,J,K,J} has a loop and the loop start is {J}', () => {
		const linkedList = new LinkedList();
		linkedList.addNode(new LinkedListNode('A'));
		linkedList.addNode(new LinkedListNode('B'));
		linkedList.addNode(new LinkedListNode('C'));
		linkedList.addNode(new LinkedListNode('D'));
		linkedList.addNode(new LinkedListNode('E'));
		linkedList.addNode(new LinkedListNode('F'));
		linkedList.addNode(new LinkedListNode('G'));
		linkedList.addNode(new LinkedListNode('H'));
		linkedList.addNode(new LinkedListNode('I'));
		const nodeJ = linkedList.addNode(new LinkedListNode('J'));
		linkedList.addNode(new LinkedListNode('K'));
		linkedList.addNode(nodeJ);

		expect(solution(linkedList)).toBe(nodeJ);
	});
	test(title + ': ' +
	'linkedList {A,B,C,D,E,F,G,H,I,J,K, B} has a loop and the loop start is {B}', () => {
		const linkedList = new LinkedList();
		linkedList.addNode(new LinkedListNode('A'));
		const nodeB = linkedList.addNode(new LinkedListNode('B'));
		linkedList.addNode(new LinkedListNode('C'));
		linkedList.addNode(new LinkedListNode('D'));
		linkedList.addNode(new LinkedListNode('E'));
		linkedList.addNode(new LinkedListNode('F'));
		linkedList.addNode(new LinkedListNode('G'));
		linkedList.addNode(new LinkedListNode('H'));
		linkedList.addNode(new LinkedListNode('I'));
		linkedList.addNode(new LinkedListNode('J'));
		linkedList.addNode(new LinkedListNode('K'));
		linkedList.addNode(nodeB);

		expect(solution(linkedList)).toBe(nodeB);
	});
	test(title + ': ' +
	'linkedList {A,B,C,D,E,F,G,H,I,J,K, A} has a loop and the loop start is {A}', () => {
		const linkedList = new LinkedList();
		const nodeA = linkedList.addNode(new LinkedListNode('A'));
		linkedList.addNode(new LinkedListNode('B'));
		linkedList.addNode(new LinkedListNode('C'));
		linkedList.addNode(new LinkedListNode('D'));
		linkedList.addNode(new LinkedListNode('E'));
		linkedList.addNode(new LinkedListNode('F'));
		linkedList.addNode(new LinkedListNode('G'));
		linkedList.addNode(new LinkedListNode('H'));
		linkedList.addNode(new LinkedListNode('I'));
		linkedList.addNode(new LinkedListNode('J'));
		linkedList.addNode(new LinkedListNode('K'));
		linkedList.addNode(nodeA);

		expect(solution(linkedList)).toBe(nodeA);
	});
	test(title + ': ' +
	'linkedList {A,B,A} has a loop and the loop start is {A}', () => {
		const linkedList = new LinkedList();
		const nodeA = linkedList.addNode(new LinkedListNode('A'));
		linkedList.addNode(new LinkedListNode('B'));
		linkedList.addNode(nodeA);

		expect(solution(linkedList)).toBe(nodeA);
	});
}

const Solution1 = require('./solution1');
testWitSolution('Solution1', Solution1);
