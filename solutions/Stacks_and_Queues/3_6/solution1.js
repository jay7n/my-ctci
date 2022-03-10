const { LinkedList, LinkedListNode } = require('../../../datastructures/LinkedList/solution1');

class AnimalShelter {
	list;

	constructor() {
		this.list = new LinkedList();
	}

	enqueue(type, value)	{
		this.list.add([type, value]);
	}

	dequeueAny() {
		if (this.list.isEmpty()) {
			return null;
		}
		const [type, value] = this.list.removeNode(this.list.head).data;
		return {
			type,
			value
		};
	}

	dequeueDog() {
		return this.dequeueByType('Dog');
	}

	dequeueCat() {
		return this.dequeueByType('Cat');
	}

	dequeueByType(Type) {
		if (this.list.isEmpty()) {
			return null;
		}
		let cur = this.list.head;
		while(cur) {
			if (cur.data[0] == Type) {
				break;
			}
			cur = cur.next;
		}

		if (cur == null) {
			return null
		};

		const [type, value] = this.list.removeNode(cur).data;
		return {
			type,
			value
		}
	}
}

module.exports = AnimalShelter;