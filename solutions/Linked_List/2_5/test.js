const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

const testWithSolution = function(title, solution) {
	test(title + ':' +
	'number 617([7,1,6]) plus number 295([5,9,2]) is 912([2,1,9])', () => {
		const l1 = new LinkedList([7,1,6]);
		const l2 = new LinkedList([5,9,2]);
		const lres = solution(l1, l2);
		expect(lres.toArray()).toStrictEqual([2,1,9]);
	});
	test(title + ':' +
	'number 5([5]) plus number 5([5]) is 10([0,1])', () => {
		const l1 = new LinkedList([5]);
		const l2 = new LinkedList([5]);
		const lres = solution(l1, l2);
		expect(lres.toArray()).toStrictEqual([0,1]);
	});
	test(title + ':' +
	'number 5([5]) plus number 3([3]) is 8([8])', () => {
		const l1 = new LinkedList([5]);
		const l2 = new LinkedList([3]);
		const lres = solution(l1, l2);
		expect(lres.toArray()).toStrictEqual([8]);
	});
	test(title + ':' +
	'number 9([9]) plus number 999([9,9,9]) is 1008([8,0,0,1])', () => {
		const l1 = new LinkedList([9]);
		const l2 = new LinkedList([9,9,9]);
		const lres = solution(l1, l2);
		expect(lres.toArray()).toStrictEqual([8,0,0,1]);
	});
}

const testFollowUpWithSolution = function(title, solution) {
	test(title + ':' +
	'number 617([6,1,7]) plus number 295([2,9,5]) is 912([9,1,2])', () => {
		const l1 = new LinkedList([6,1,7]);
		const l2 = new LinkedList([2,9,5]);
		const lres = solution(l1, l2);
		expect(lres.toArray()).toStrictEqual([9,1,2]);
	});
	test(title + ':' +
	'number 5([5]) plus number 5([5]) is 10([1,0])', () => {
		const l1 = new LinkedList([5]);
		const l2 = new LinkedList([5]);
		const lres = solution(l1, l2);
		expect(lres.toArray()).toStrictEqual([1,0]);
	});
	test(title + ':' +
	'number 5([5]) plus number 3([3]) is 8([8])', () => {
		const l1 = new LinkedList([5]);
		const l2 = new LinkedList([3]);
		const lres = solution(l1, l2);
		expect(lres.toArray()).toStrictEqual([8]);
	});
	test(title + ':' +
	'number 9([9]) plus number 999([9,9,9]) is 1008([1,0,0,8])', () => {
		const l1 = new LinkedList([9]);
		const l2 = new LinkedList([9,9,9]);
		const lres = solution(l1, l2);
		expect(lres.toArray()).toStrictEqual([1,0,0,8]);
	});
}


const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);

const Solution2 = require('./solution2_killed_me');
testFollowUpWithSolution('Solution2', Solution2);