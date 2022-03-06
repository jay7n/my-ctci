const { Stack } = require('../../../datastructures/Stack/solution1');

class StackMin {
	st;
	minSt;

	constructor() {
		this.st = new Stack();
		this.minSt = new Stack();
	}

	push(val) {
		const peekMinSt = this.minSt.peek();
		const min = peekMinSt != null ? Math.min(val, peekMinSt) : val;
		this.st.push(val);
		this.minSt.push(min);
	}

	pop() {
		this.st.pop();
		this.minSt.pop();
	}

	min() {
		return this.minSt.peek();
	}
}

module.exports = StackMin;