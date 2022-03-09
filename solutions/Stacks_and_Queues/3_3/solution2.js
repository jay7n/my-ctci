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
		// console.log('cur stack idx = ', this.curStackIdx, 'next elem idx = ', this.nextElemIdx, 'stack = ', this.stacks[this.curStackIdx].toArray());
		stack.pop();
		if (stack.isEmpty()) {
			this.nextElemIdx = this.singleStackCapacity;
			this.curStackIdx--;
		} else { // point1 - 'this.nextElemIdx--' should be wrapped in else-part-logic so as to be corresponded with push()
			this.nextElemIdx--;
		}
	}

	peek() {
		// console.log('cur stack idx = ', this.curStackIdx, 'next elem idx = ', this.nextElemIdx, 'stack = ', this.stacks[this.curStackIdx].toArray());
		let stack = this.stacks[this.curStackIdx];
		if (stack) {
			return stack.peek();
		}
		return null;
	}

	popAt(staskIdx) {

	}
}

module.exports = SetsOfStack;