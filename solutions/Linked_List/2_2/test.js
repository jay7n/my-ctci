const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

const testWithSolution = function(title, solution) {
	test(title + ':' + 
	'The 3th to the end in Singly LinkedList [1,2,3,4,5] is 3', () => {
		const linkedList = new LinkedList([1,2,3,4,5]);
		expect(solution(linkedList, 3)).toBe(3);
	});
	test(title + ':' + 
	'The 1th to the end in Singly LinkedList [1,2,3,4,5] is 5', () => {
		const linkedList = new LinkedList([1,2,3,4,5]);
		expect(solution(linkedList, 1)).toBe(5);
	});
	test(title + ':' + 
	'The 5th to the end in Singly LinkedList [1,2,3,4,5] is 1', () => {
		const linkedList = new LinkedList([1,2,3,4,5]);
		expect(solution(linkedList, 5)).toBe(1);
	});
	test(title + ':' + 
	'The -1th, 0th and 6th to the end in Singly LinkedList [1,2,3,4,5] are are null', () => {
		const linkedList = new LinkedList([1,2,3,4,5]);
		const resN1 = solution(linkedList, -1);
		const res0 = solution(linkedList, 0);
		const res6 = solution(linkedList, 6);
		expect(resN1).toBe(null);
		expect(res0).toBe(null);
		expect(res6).toBe(null);
	});
	test(title + ':' + 
	'The 1th to the end in Singly LinkedList [5] is 5', () => {
		const linkedList = new LinkedList([5]);
		expect(solution(linkedList, 1)).toBe(5);
	});
	test(title + ':' + 
	'The 1th to the end in Singly LinkedList [] is null', () => {
		const linkedList = new LinkedList([]);
		expect(solution(linkedList, 1)).toBe(null);
	});
}

const Solution1 = require('./solution1');
const Solution2 = require('./solution2_killed_me_for_negligence');
testWithSolution('Solution1', Solution1);
testWithSolution('Solution1', Solution2);