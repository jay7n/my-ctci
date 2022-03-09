const {LinkedList} = require('../LinkedList/solution1');

class Stack {
	list;
	listSize;

	constructor() {
		this.list = new LinkedList();
		this.listSize = 0;
	}

	push(val) {
		this.list.add(val);
		this.listSize++;
	}

	pop() {
		if (this.list.tail) {
			const removedNode = this.list.removeNode(this.list.tail);
			this.listSize--;
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

	isEmpty() {
		return this.list == null || this.list.head == null;	
	}

	size() {
		return this.listSize;
	}

	toArray() {
		return this.list.toArray();
	}
}

module.exports = {
	Stack
};