const testWithSolution = function(title, solution) {
	test(title + ':' +
	`m(
		'1', '2',
		'3', '4'
	 ) after rotated becomes
	 m(
		 '3', '1',
		 '4', '2'
	 )`, () => {
		 expect(solution([
			 '1', '2',
			 '3', '4'
			])).toStrictEqual([
				'3', '1',
				'4', '2'
			])
	});

	test(title + ':' +
	`m(
		'1',  '2', '3',
		'4',  '5', '6',
		'7',  '8', '9',
	 ) after rotated becomes
	 m(
		 '7', '4', '1',
		 '8', '5', '2',
		 '9', '6', '3'
	 )`, () => {
		 expect(solution([
			 '1', '2', '3',
			 '4', '5', '6',
			 '7', '8', '9',
			])).toStrictEqual([
				'7', '4', '1',
				'8', '5', '2',
				'9', '6', '3'
			])
	});

	test(title + ':' +
	`m(
		'1',  '2',  '3',  '4',
		'5',  '6',  '7',  '8',
		'9',  '10', '11', '12',
		'13', '14', '15', '16',
	 ) after rotated becomes
	 m(
		 '13', '9', '5', '1',
		 '14', '10', '6', '2',
		 '15', '11', '7', '3',
		 '16', '12', '8', '4'
	 )`, () => {
		 expect(solution([
			 '1', '2', '3', '4',
			 '5', '6', '7', '8',
			 '9', '10', '11', '12',
			 '13', '14', '15', '16',
			])).toStrictEqual([
				'13', '9', '5', '1',
				'14', '10', '6', '2',
				'15', '11', '7', '3',
				'16', '12', '8', '4'
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