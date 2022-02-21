const testWithSolution = function(title, solution) {
	test(title + ':' +
	`m(
		1, 0, 2,
		3, 5, 9
	) after zeroed becomes
	m(
		0, 0, 0,
		3, 0, 9
	)`, () => {
		expect(solution([
			[1, 0, 2,],
			[3, 5, 9,],
		])).toStrictEqual([
			[0, 0, 0,],
			[3, 0, 9,],
		])
	});

	test(title + ':' +
	`m(
		0, 1, 2, 3,
		4, 0, 5, 6,
		7, 8, 0, 9,

	) after zeroed becomes
	m(
		0, 0, 0, 0,
		0, 0, 0, 0,
		0, 0, 0, 0
	)`, () => {
		expect(solution([
			[0, 1, 2, 3,],
			[4, 0, 5, 6,],
			[7, 8, 0, 9,],
		])).toStrictEqual([
			[0, 0, 0, 0,],
			[0, 0, 0, 0,],
			[0, 0, 0, 0,],
		])
	});

	test(title + ':' +
	`m(
		1,
		0,
	) after zeroed becomes
	m(
		0,
		0,
	)`, () => {
		expect(solution([
			[1],
			[0],
		])).toStrictEqual([
			[0],
			[0]
		])
	});

	test(title + ':' +
	`m(
		1,
	) after zeroed becomes
	m(
		1,
	)`, () => {
		expect(solution([
			[1],
		])).toStrictEqual([
			[1],
		])
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);