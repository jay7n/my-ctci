const { Stack } = require('../../../datastructures/Stack/solution1');

class SetsOfStack {
	singleStackCapacity;
	stacks;
	// stacksElemsCount;
	curStackIdx;

	constructor(singleStackCapacity) {
		this.singleStackCapacity = singleStackCapacity;
		this.stacks = [];
		// this.stacksElemsCount = [];
		this.curStackIdx = 0;
	}

	push(val) {
		let stack = this.stacks[this.curStackIdx];
		if (stack == null) {
			this.stacks[this.curStackIdx] = stack = new Stack();
		} 
		if (stack.size() >= this.singleStackCapacity) {
			this.curStackIdx++;
			this.push(val); // point1 - a limited recursion
		} else {
			stack.push(val);
		}
	}

	pop() {
		let stack = this.stacks[this.curStackIdx];
		// console.log('cur stack idx = ', this.curStackIdx, 'next elem idx = ', this.nextElemIdx, 'stack = ', this.stacks[this.curStackIdx].toArray());
		const poppedVal = stack.pop();
		if (stack.isEmpty() && this.curStackIdx > 0) { // mind the condition: this.curStackIdx > 0
			this.curStackIdx--;
		}
		return poppedVal;
	}

	peek() {
		console.log('cur stack idx = ', this.curStackIdx, 'stacks = ', this.stacks.map(s => s.toArray()));
		// 'stack = ', this.stacks[this.curStackIdx].toArray()
		let stack = this.stacks[this.curStackIdx];
		if (stack) {
			return stack.peek();
		}
		return null;
	}

	popAt(stackIdx) {
		if (stackIdx >= 0 && stackIdx < this.stacks.length) {
			const stack = this.stacks[stackIdx];
			const poppedVal = stack.pop();
			return poppedVal;
		}
		return null;
	}
}

module.exports = SetsOfStack;