const testWithSolution = function(title, SolutionSetOfStacks) {
	test(title + ':' +
	'Normal Operations', () => {
		const ss = new SolutionSetOfStacks(3);
		ss.push(1);

		expect(ss.peek()).toBe(1);

		ss.push(2);
		ss.pop();

		expect(ss.peek()).toBe(1);

		ss.push(2);
		ss.push(3);
		ss.push(4);

		expect(ss.peek()).toBe(4);

		ss.pop();

		expect(ss.peek()).toBe(3);

		ss.push(4);

		expect(ss.peek()).toBe(4);

		ss.push(5);
		ss.push(6);

		expect(ss.peek()).toBe(6);

		ss.push(7);

		expect(ss.peek()).toBe(7);

		ss.pop();
		ss.pop();
		ss.pop();
		ss.pop();

		expect(ss.peek()).toBe(3);

		ss.pop();
		ss.pop();

		expect(ss.peek()).toBe(1);


		// below is for the follow-up question
		if (ss.popAt) {

		}

	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);

// const Solution2 = require('./solution2');
// testWithSolution('Solution2', Solution2);