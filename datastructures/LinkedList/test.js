const testWithSolution = function(title, LinkedList) {
	test(title + ': ' +
	'create linked list from [1,2,3,4]', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		expect(linkedList.toArray()).toStrictEqual([1,2,3,4]);
	});
	test(title + ': ' +
	'create linked list from []', () => {
		const linkedList = new LinkedList([]);
		expect(linkedList.toArray()).toStrictEqual([]);
	});
	test(title + ': ' +
	'create linked list from [0]', () => {
		const linkedList = new LinkedList([0]);
		expect(linkedList.toArray()).toStrictEqual([0]);
	});
	test(title + ': ' +
	'linked list [1,2,3,4] s\'head is 1', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		expect(linkedList.head.data).toBe(1);
	});
	test(title + ': ' +
	'linked list [1,2,3,4] s\'tail is 4', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		expect(linkedList.tail.data).toBe(4);
	});
	test(title + ': ' +
	'linked list [0] s\'head and tail are both 0', () => {
		const linkedList = new LinkedList([0]);
		const truthy = linkedList.head.data === linkedList.tail.data && linkedList.tail.data  === 0;
		expect(truthy).toBe(true);
	});
	test(title + ': ' +
	'linked list [1,2,3,4] with idx=2 is 3', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		expect(linkedList.at(2).data).toBe(3);
	});
	test(title + ': ' +
	'linked list [1,2,3,4] with idx=2\'s preceding elem is 2', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		const elm = linkedList.at(2);
		expect(elm.prev.data).toBe(2);
	});
	test(title + ': ' +
	'linked list [1,2,3,4] with idx=2\'s subsequent elem is 4', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		const elm = linkedList.at(2);
		expect(elm.next.data).toBe(4);
	});
	test(title + ': ' +
	'linked list [1,2,3,4] becomes [1,2,4] after removing elem at idx=2', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		linkedList.removeNodeAt(2);
		expect(linkedList.toArray()).toStrictEqual([1,2,4]);
	});
	test(title + ': ' +
	'linked list [1,2,3,4] becomes [1,2,3,4] after removing elem at idx=10', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		linkedList.removeNodeAt(10);
		expect(linkedList.toArray()).toStrictEqual([1,2,3,4]);
	});
	test(title + ': ' +
	'linked list [1,2,3] becomes [1,2,3,4,5] after adding elem 4 and 5', () => {
		const linkedList = new LinkedList([1,2,3]);
		linkedList.add(4);
		linkedList.add(5);
		expect(linkedList.toArray()).toStrictEqual([1,2,3,4,5]);
	});
	test(title + ': ' +
	'linked list [] becomes [5] after adding elem 5', () => {
		const linkedList = new LinkedList([]);
		linkedList.add(5);
		expect(linkedList.toArray()).toStrictEqual([5]);
	});
	test(title + ': ' +
	'linked list [1,2,3] becomes [1,2,3,4,5] after adding node(data=4) and node(data=5)', () => {
		const linkedList = new LinkedList([1,2,3]);
		const newnode1 = new LinkedListNode(4);
		const newnode2 = new LinkedListNode(5);
		linkedList.addNode(newnode1);
		linkedList.addNode(newnode2);
		expect(linkedList.toArray()).toStrictEqual([1,2,3,4,5]);
	});
	test(title + ': ' +
	'linked list [] becomes [5] after adding node(data=5)', () => {
		const linkedList = new LinkedList([]);
		const newnode = new LinkedListNode(5);
		linkedList.addNode(newnode);
		expect(linkedList.toArray()).toStrictEqual([5]);
	});
	test(title + ': ' +
	'linked list [5,6] becomes empty after removing 5 and 6', () => {
		const linkedList = new LinkedList([5]);
		linkedList.add(6);
		linkedList.removeNodeAt(0);
		linkedList.removeNodeAt(0);
		expect(linkedList.isEmpty()).toBe(true);
	});
}

const { LinkedList, LinkedListNode } = require('./solution1');
testWithSolution('Solution1', LinkedList);