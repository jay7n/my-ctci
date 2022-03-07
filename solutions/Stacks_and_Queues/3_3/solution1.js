const { Stack } = require('../../../datastructures/Stack/solution1');

class SetsOfStack {
	singleStackCapacity;
	stacks;
	curStackIdx;
	nextElemIdx;

	constructor(singleStackCapacity) {
		this.singleStackCapacity = singleStackCapacity;
		this.stacks = [];
		this.nextElemIdx = 0;
		this.curStackIdx = 0;
	}

	push(val) {
		if (this.nextElemIdx === this.singleStackCapacity) {
			this.curStackIdx++;
			this.nextElemIdx = 0;
		}
		let stack = this.stacks[this.curStackIdx];
		if (stack == null) {
			stack = new Stack();
			this.stacks[this.curStackIdx] = stack;
		}
		stack.push(val);
		this.nextElemIdx++;
	}

	pop() {
		let stack = this.stacks[this.curStackIdx];
		stack.pop();
		if (this.nextElemIdx === 1) {
			this.nextElemIdx = this.singleStackCapacity;
			this.curStackIdx--;
		}
		this.nextElemIdx--;
	}

	peek() {
		let stack = this.stacks[this.curStackIdx];
		if (stack) {
			return stack.peek();
		}
		return null;
	}
}

module.exports = SetsOfStack;