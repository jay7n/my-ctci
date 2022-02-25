const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

const testWithSolution = function(title, solution) {
	test(title + ':' + 
	'LinkedList [1,2,3,2,4,1,3] becomes [1,2,3,4] after dup removed', () => {
		const linkedList = new LinkedList([1,2,3,2,4,1,3]);
		expect(solution(linkedList)).toStrictEqual([1,2,3,4]);
	});
	test(title + ':' + 
	'LinkedList [1,2,3,4] becomes [1,2,3,4] after dup removed', () => {
		const linkedList = new LinkedList([1,2,3,4]);
		expect(solution(linkedList)).toStrictEqual([1,2,3,4]);
	});
	test(title + ':' + 
	'LinkedList [] becomes [] after dup removed', () => {
		const linkedList = new LinkedList([]);
		expect(solution(linkedList)).toStrictEqual([]);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);