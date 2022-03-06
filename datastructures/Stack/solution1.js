const {LinkedList} = require('../LinkedList/solution1');

class Stack {
	list;

	constructor() {
		this.list = new LinkedList();
		this.minStack = new LinkedList();
	}

	push(val) {
		this.minVal = Math.min(val, this.minVal);
		this.list.add(val);
	}

	pop() {
		const removedNode = this.list.removeNode(this.list.tail);
		if (removedNode) {
			return removedNode.data;
		}
		return null;
	}

	peek() {
		if (this.list.tail) {
			return this.list.tail.data;
		}
		return null;
	}
}

module.exports = {
	Stack
};