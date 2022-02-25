const testWithSolution = function(title, LinkedList) {
	test(title + ': ' +
	'create linked list from [1,2,3,4]', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		expect(linkedList.toArray()).toStrictEqual([1,2,3,4]);
	});
	test(title + ': ' +
	'linked list [1,2,3,4] with idx=2 is 3', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		expect(linkedList.at(2)).toBe(3);
	});
}

const {LinkedList} = require('./solution1');
testWithSolution('Solution1', LinkedList);