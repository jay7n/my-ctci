const testWithSolution = function(title, SortStack) {
	test(title + ':' +
	'', () => {
		const ss = new SortStack();
		ss.push(5);
		ss.push(10);
		ss.push(7);
		ss.push(0);
		ss.push(3);
		ss.push(6);
		ss.push(2);
		ss.push(4);
		ss.push(8);
		ss.push(1);
		ss.push(9);
		expect(ss.peek()).toBe(0);
		expect(ss.isEmpty()).toBe(false);

		ss.pop();
		expect(ss.peek()).toBe(1);

		ss.pop();
		expect(ss.peek()).toBe(2);

		ss.pop();
		expect(ss.peek()).toBe(3);

		ss.pop();
		expect(ss.peek()).toBe(4);

		ss.pop();
		expect(ss.peek()).toBe(5);
		expect(ss.isEmpty()).toBe(false);

		ss.pop();
		expect(ss.peek()).toBe(6);

		ss.pop();
		expect(ss.peek()).toBe(7);

		ss.pop();
		expect(ss.peek()).toBe(8);

		ss.pop();
		expect(ss.peek()).toBe(9);

		ss.pop();
		expect(ss.peek()).toBe(10);

		ss.pop();
		expect(ss.peek()).toBe(null);

		expect(ss.isEmpty()).toBe(true);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);