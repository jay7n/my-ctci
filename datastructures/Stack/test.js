const testWithSolution = function(title, Stack) {
	test(title + ':' +
	'test various operations of Stack', () => {
		const stack = new Stack();
		expect(stack.peek()).toBe(null);

		stack.push(2);
		expect(stack.peek()).toBe(2);

		stack.push(1);
		expect(stack.peek()).toBe(1);

		const val = stack.pop();
		expect(stack.peek()).toBe(2);
		
		expect(val).toBe(1);
		expect(stack.isEmpty()).toBe(false);

		stack.pop();
		expect(stack.peek()).toBe(null);
		expect(stack.isEmpty()).toBe(true);

	});
}

const {Stack} = require('./solution1');
testWithSolution('Solution1', Stack);