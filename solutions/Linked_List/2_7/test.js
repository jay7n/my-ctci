const { LinkedList, LinkedListNode } = require('../../../datastructures/LinkedList/solution1');

const testWitSolution = function(title, solution) {
	test(title + ': ' +
	'linkedList{1,a,2,3,4} and {9,8,a} have intersection with node a', () => {
		const linkedLis1 = new LinkedList([1]);
		const linkedList2 = new LinkedList([9, 8]);
		const node = new LinkedListNode('a');
		linkedLis1.addNode(node);
		linkedList2.addNode(node);
		linkedLis1.add(2);
		linkedLis1.add(3);
		linkedLis1.add(4);

		const intersectedNode = solution(linkedLis1, linkedList2);
		expect(intersectedNode).toBe(node);
	});

  // test(title + ': ' +
	// 'linkedList{1,a,2,3,4} and {9,8,a, 7, 6} have intersection with node a', () => {
	// 	const linkedLis1 = new LinkedList([1]);
	// 	const linkedList2 = new LinkedList([9, 8]);
	// 	const node = new LinkedListNode('a');
	// 	linkedLis1.addNode(node);
	// 	linkedList2.addNode(node);
	// 	linkedLis1.add(2);
	// 	linkedLis1.add(3);
	// 	linkedLis1.add(4);
  //   linkedList2.add(7);
  //   linkedList2.add(6);

	// 	const intersectedNode = solution(linkedLis1, linkedList2);
	// 	expect(intersectedNode).toBe(node);
	// });

	test(title + ': ' +
	'linkedList{1,2,3,4,5,9} and {9} have intersection with node 9', () => {
		const linkedLis1 = new LinkedList([1,2,3,4,5]);
		const linkedList2 = new LinkedList([9]);

		linkedLis1.addNode(linkedList2.head);

		const intersectedNode = solution(linkedLis1, linkedList2);
		expect(intersectedNode).toBe(linkedList2.head);
	});

	test(title + ': ' +
	'linkedList{1,2,3,4,5} and {9,1,2,3,4,5} have intersection with node 1', () => {
		const linkedList1 = new LinkedList([1,2,3,4,5]);
		const linkedList2 = new LinkedList([9]);

		linkedList2.addNode(linkedList1.head);

		const intersectedNode = solution(linkedList1, linkedList2);
		expect(intersectedNode).toBe(linkedList1.head);
	});

	test(title + ': ' +
	'linkedList[1,2,3,4,5] and [9,8,7,6,5] have no intersection', () => {
		const linkedLis1 = new LinkedList([1,2,3,4,5]);
		const linkedList2 = new LinkedList([9,8,7,6,5]);

		const intersectedNode = solution(linkedLis1, linkedList2);
		expect(intersectedNode).toBe(null);
	});
}

const Solution1 = require('./solution1');
const Solution2 = require('./solution2');
testWitSolution('Solution1', Solution1);
testWitSolution('Solution2', Solution2);