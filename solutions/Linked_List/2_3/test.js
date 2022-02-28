const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

const testWithSolution = function(title, solution) {
	test(title + ': ' +
	"LinkedList['a', 'b', 'c', 'd', 'e'] becomes ['a', 'b', 'd', 'e'] " + 
	"after removing node with idx=2", () => {
		const linkedList = new LinkedList(['a', 'b', 'c', 'd', 'e']);
		const node = linkedList.at(2);
		const success = solution(node);
		expect(success).toBe(true);
		expect(linkedList.toArray()).toStrictEqual(['a', 'b', 'd', 'e']);
	});
	test(title + ': ' +
	"LinkedList['a', 'b'] becomes ['b'] " + 
	"after removing node with idx=0", () => {
		const linkedList = new LinkedList(['a', 'b']);
		const node = linkedList.at(0);
		const success = solution(node);
		expect(success).toBe(true);
		expect(linkedList.toArray()).toStrictEqual(['b']);
	});
	test(title + ': ' +
	"LinkedList['a'] becomes ['a'] " + 
	"after removing node with idx=0", () => {
		const linkedList = new LinkedList(['a']);
		const node = linkedList.at(0);
		const success = solution(node);
		expect(success).toBe(false);
		expect(linkedList.toArray()).toStrictEqual(['a']);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);