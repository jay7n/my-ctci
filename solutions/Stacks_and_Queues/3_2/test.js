const testWitSolution = function(title, solution) {
	test(title + ':' +
	'', () => {
		const stack = new solution();
		stack.push(2);
		stack.push(1);
		stack.push(3);
		stack.push(1);
		expect(stack.min()).toBe(1);

		stack.pop();
		expect(stack.min()).toBe(1);

		stack.pop();
		expect(stack.min()).toBe(1);

		stack.pop();
		expect(stack.min()).toBe(2);

		stack.push(-1);
		stack.push(4);
		stack.push(-1);
		expect(stack.min()).toBe(-1);

		stack.pop();
		expect(stack.min()).toBe(-1);

		stack.pop();
		expect(stack.min()).toBe(-1);

		stack.pop();
		expect(stack.min()).toBe(2);

	});
}

const Solution1 = require('./solution1');
testWitSolution('Solution1', Solution1);

const Solution2 = require('./solution2');
testWitSolution('Solution2', Solution2);