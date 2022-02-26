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
		let i = 0;
		while ( i < idx && cur) { // point3 - check if cur is rolling to the end of the list
			cur = cur.next;
			i++;
		}
		return cur;
	}

	removeAt(idx) {
		const cur = this.at(idx); // point4 - check if cur exists
		if (cur == null) 
			return;

		if (cur.next) {
			cur.next.prev = cur.prev;
		}
		if (cur.prev) {
			cur.prev.next = cur.next; 
		}
	}

	toArray() {
		const array = [];
		if (this.head) { // point5 - check if head exists
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