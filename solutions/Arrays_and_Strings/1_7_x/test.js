const testWithSolution = function(title, solution) {
	test(title + ':' +
	`m(
		'rgba', 'rabg',
		'abgr', 'bgar'
	 ) after rotated becomes
	 m(
		'rgba', 'abgr',
		'rabg', 'bgar'
	 )`, () => {
		 expect(solution([
			 'rgba', 'rabg',
			 'abgr', 'bgar'
			])).toStrictEqual([
				'rgba', 'abgr',
				'rabg', 'bgar'
			])
	});

	test(title + ':' +
	`m(
		'rgba', 'rabg', 'rrrr', 'aaaa',
		'abgr', 'bgar', 'bbbb', 'gggg',
		'aagg', 'bbrr', 'agab', 'grbg',
		'bbrr', 'ggbb', 'abrg', 'rbag',
	 ) after rotated becomes
	 m(
		 'rgba', 'abgr', 'aagg', 'bbrr',
		 'rabg', 'bgar', 'bbrr', 'ggbb',
		 'rrrr', 'bbbb', 'agab', 'abrg',
		 'aaaa', 'gggg', 'grbg', 'rbag'
	 )`, () => {
		 expect(solution([
			 'rgba', 'rabg', 'rrrr', 'aaaa',
			 'abgr', 'bgar', 'bbbb', 'gggg',
			 'aagg', 'bbrr', 'agab', 'grbg',
			 'bbrr', 'ggbb', 'abrg', 'rbag',
			])).toStrictEqual([
				'rgba', 'abgr', 'aagg', 'bbrr',
				'rabg', 'bgar', 'bbrr', 'ggbb',
				'rrrr', 'bbbb', 'agab', 'abrg',
				'aaaa', 'gggg', 'grbg', 'rbag'
			])
	});

	test(title + ':' +
	`m(
		'rgba'
	 ) after rotated becomes
	 m(
		'rgba', 
	 )`, () => {
		 expect(solution([
			 'rgba',
			])).toStrictEqual([
			 'rgba', 
			])
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);