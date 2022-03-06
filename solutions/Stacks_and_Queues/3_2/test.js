const testWitSolution = function(title, solution) {
	test(title + ':' +
	'', () => {
		const stack = new solution();
		stack.push(2);
		stack.push(1);
		stack.push(3);
		expect(stack.min()).toBe(1);

		stack.pop();
		expect(stack.min()).toBe(1);

		stack.pop();
		expect(stack.min()).toBe(2);

		stack.push(-1);
		stack.push(4);
		expect(stack.min()).toBe(-1);

	});
}

const Solution1 = require('./solution1');
testWitSolution('Solution1', Solution1);