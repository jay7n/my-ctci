const {LinkedList} = require('../LinkedList/solution1');

class Stack {
	list;

	constructor() {
		this.list = new LinkedList();
	}

	push(val) {
		this.list.add(val);
	}

	pop() {
		if (this.list.tail) {
			const removedNode = this.list.removeNode(this.list.tail);
			if (removedNode) {
				return removedNode.data;
			}
			return null;
		}
	}

	peek() {
		if (this.list.tail) {
			return this.list.tail.data;
		}
		return null;
	}

	toArray() {
		return this.list.toArray();
	}
}

module.exports = {
	Stack
};