const testWithSolution = function(title, QueueViaStacks) {
	test(title + ': ' + 
	'', () => {
		const qvs = new QueueViaStacks();
		qvs.add(1);
		expect(qvs.peek()).toBe(1);

		qvs.add(2);
		expect(qvs.peek()).toBe(1);

		qvs.add(3);
		qvs.add(4);
		expect(qvs.peek()).toBe(1);

		qvs.remove();
		expect(qvs.peek()).toBe(2);
		qvs.remove();
		expect(qvs.peek()).toBe(3);
		qvs.remove();
		expect(qvs.peek()).toBe(4);
		qvs.remove();
		expect(qvs.peek()).toBe(null);
		qvs.remove();
		expect(qvs.peek()).toBe(null);

		qvs.add(5);
		expect(qvs.peek()).toBe(5);

		qvs.add(6);
		expect(qvs.peek()).toBe(5);
		qvs.remove();
		expect(qvs.peek()).toBe(6);

		qvs.remove();
		expect(qvs.peek()).toBe(null);

	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);