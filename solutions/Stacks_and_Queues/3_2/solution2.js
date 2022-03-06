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
		if (peekMinSt == null || val < peekMinSt.val) {
			this.minSt.push({val, count:1});
		} else if (val === peekMinSt.val) {
			peekMinSt.count++;
		}
		this.st.push(val);
	}

	pop() {
		const val = this.st.pop();
		const peekMinSt = this.minSt.peek();
		if (val === peekMinSt.val) {
			peekMinSt.count--;
			if (peekMinSt.count === 0) {
				this.minSt.pop();
			}
		}
	}

	min() {
		return this.minSt.peek().val;
	}
}

module.exports = StackMin;