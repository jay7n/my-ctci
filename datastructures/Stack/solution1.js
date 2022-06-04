const {LinkedList} = require('../LinkedList/solution1');

class Stack {
	list;
	listSize;

	constructor() {
		this.list = new LinkedList();
		this.listSize = 0;
	}

  fromArray(array) {
    for (const elm of array) {
      this.push(elm);
    }
    return this;
  }

	push(val) {
		this.list.add(val);
		this.listSize++;
	}

	pop() {
		if (this.list.tail != null) {
			const removedNode = this.list.removeNode(this.list.tail);
			this.listSize--;
			if (removedNode) {
				return removedNode.data;
			}
			return null;
		}
	}

	peek() {
		if (this.list.tail != null) {
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

	popToArray() {
		let res = [];
		while(this.size() > 0) {
			res.push(this.pop());
		}
		return res;
	}
}

module.exports = {
	Stack
};