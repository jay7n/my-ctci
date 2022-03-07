const { Stack } = require('../../../datastructures/Stack/solution1');

class QueueViaStacks {
	st;
	stTmp;

	constructor() {
		this.st = new Stack();
		this.stTmp = new Stack();
	}

	add(val) {
		this.st.push(val);
	}

	remove() {
		this.swapStacks(this.st, this.stTmp);
		const removedVal = this.stTmp.pop();
		this.swapStacks(this.stTmp, this.st);
		return removedVal;
	}

	peek() {
		this.swapStacks(this.st, this.stTmp);
		const val = this.stTmp.peek();
		this.swapStacks(this.stTmp, this.st);
		return val;
	}

	swapStacks(st1, st2) {
		while(true) {
			const val = st1.pop();
			if (val) {
				st2.push(val);
			} else {
				break;
			}
		}
	}

}

module.exports = QueueViaStacks;