const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

const testWithSolution = function(title, solution) {
	test(title + ': ' + 
	'linkedList [1,2,3,2,1] is a palindrome', () => {
		const linkedList = new LinkedList([1,2,3,2,1]);
		const isPalindrome = solution(linkedList);
		expect(isPalindrome).toBe(true);
	});
	test(title + ': ' + 
	'linkedList [1,2,3,3,2,1] is a palindrome', () => {
		const linkedList = new LinkedList([1,2,3,3,2,1]);
		const isPalindrome = solution(linkedList);
		expect(isPalindrome).toBe(true);
	});
	test(title + ': ' + 
	'linkedList [1,2,3,4,2,1] is not a palindrome', () => {
		const linkedList = new LinkedList([1,2,3,4,2,1]);
		const isPalindrome = solution(linkedList);
		expect(isPalindrome).toBe(false);
	});
	test(title + ': ' + 
	'linkedList [1,2] is not a palindrome', () => {
		const linkedList = new LinkedList([1,2]);
		const isPalindrome = solution(linkedList);
		expect(isPalindrome).toBe(false);
	});
	test(title + ': ' + 
	'linkedList [1] is a palindrome', () => {
		const linkedList = new LinkedList([1]);
		const isPalindrome = solution(linkedList);
		expect(isPalindrome).toBe(true);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);