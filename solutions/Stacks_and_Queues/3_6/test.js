const testWithSolution = function(title, AnimalShelter) {
	test(title + ':' +
	'', () => {
		const as = new AnimalShelter();
		as.enqueue('Cat', 1);
		as.enqueue('Cat', 2);
		as.enqueue('Dog', 1);
		as.enqueue('Cat', 3);
		as.enqueue('Dog', 2);
		as.enqueue('Dog', 3);

		let item = as.dequeueAny();
		expect(item.type).toBe('Cat');
		expect(item.value).toBe(1);

		item = as.dequeueCat();
		expect(item.type).toBe('Cat');
		expect(item.value).toBe(2);

		item = as.dequeueAny();
		expect(item.type).toBe('Dog');
		expect(item.value).toBe(1);

		item = as.dequeueDog();
		expect(item.type).toBe('Dog');
		expect(item.value).toBe(2);

		item = as.dequeueCat();
		expect(item.type).toBe('Cat');
		expect(item.value).toBe(3);

		item = as.dequeueCat();
		expect(item).toBe(null);

		as.enqueue('Dog', 4);
		as.enqueue('Cat', 4);
		as.enqueue('Cat', 5);
		as.enqueue('Dog', 5);
		as.enqueue('Cat', 6);
		as.enqueue('Dog', 6);

		item = as.dequeueAny();
		expect(item.type).toBe('Dog');
		expect(item.value).toBe(3);

		item = as.dequeueAny();
		expect(item.type).toBe('Dog');
		expect(item.value).toBe(4);

		item = as.dequeueDog();
		expect(item.type).toBe('Dog');
		expect(item.value).toBe(5);

		item = as.dequeueCat();
		expect(item.type).toBe('Cat');
		expect(item.value).toBe(4);

		item = as.dequeueDog();
		expect(item.type).toBe('Dog');
		expect(item.value).toBe(6);

		item = as.dequeueDog();
		expect(item).toBe(null);

		item = as.dequeueCat();
		expect(item.type).toBe('Cat');
		expect(item.value).toBe(5);

		item = as.dequeueCat();
		expect(item.type).toBe('Cat');
		expect(item.value).toBe(6);

		item = as.dequeueCat();
		expect(item).toBe(null);

		item = as.dequeueAny();
		expect(item).toBe(null);

	});
}

const AnimalShelter = require('./solution1');
testWithSolution('Solution1', AnimalShelter);