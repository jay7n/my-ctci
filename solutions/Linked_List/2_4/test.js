const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

const testWithSolution = function(title, solution) {
	test(title + ': ' +
	"LinkedList[3,5,8,5,10,2,1] becomes [3,2,1,5,8,5,10] after partition = 5", () => {
		const linkedList = new LinkedList([3,5,8,5,10,2,1]);
		expect(solution(linkedList, 5)).toStrictEqual([3,2,1,5,8,5,10]);
	});
	test(title + ': ' +
	"LinkedList[3,5,8,5,10,2,1] becomes [3,5,5,2,1,8,10] after partition = 6", () => {
		const linkedList = new LinkedList([3,5,8,5,10,2,1]);
		expect(solution(linkedList, 6)).toStrictEqual([3,5,5,2,1,8,10]);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);