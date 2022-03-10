const { Stack } = require('../../../datastructures/Stack/solution1');

class SortStack {
	stack;
	tmpStack;

	constructor() {
		this.stack = new Stack();
		this.tmpStack = new Stack();
	}

	push(val) {
		if (this.stack.isEmpty() && this.stack.peek() <= val) {
			this.stack.push(val);
		} else {
			while (this.stack.isEmpty() == false && val > this.stack.peek()) { // point1 - mind the condition 'this.stack.isEmpty() == false'
				this.tmpStack.push(this.stack.pop());
			}
			this.stack.push(val);
			while(this.tmpStack.isEmpty() == false) {
				this.stack.push(this.tmpStack.pop());
			}
		}
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack.peek();
	}

	isEmpty() {
		return this.stack.isEmpty();
	}
}

module.exports = SortStack;