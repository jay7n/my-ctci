class LinkedListNode {
	prev;
	data;
	next;
}

class LinkedList {
	head;
	tail;

	constructor(rawList) {
		let cur;
		let prev;
		for (const elem of rawList) {
			cur = new LinkedListNode();
			if (prev) {
				prev.next = cur; // point1 - at first time prev is null
			}
			cur.prev = prev; // point2 - bidirectional weave. don't forget here
			cur.data = elem;
			prev = cur;
			if (this.head == null) {
				this.head = cur;
			}
		}
		this.tail = cur;
	}

	at(idx) {
		let cur = this.head;
		for (let i = 0; i < idx; i++) {
			cur = cur.next;
		}
		return cur;
	}

	toArray() {
		const array = [];
		if (this.head) { // point3 - check if head exists
			array.push(this.head.data);
			let cur = this.head.next;
			while (cur) {
				array.push(cur.data);
				cur = cur.next;
			}
		}
		return array;
	}
}

exports.LinkedListNode = LinkedListNode;
exports.LinkedList = LinkedList;