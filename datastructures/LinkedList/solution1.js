class LinkedListNode {
	prev;
	data;
	next;
	constructor(data) {
		this.data = data;
	}
}

class LinkedList {
	head;
	tail;

	constructor(rawList = []) {
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

	removeNodeAt(idx) {
		const cur = this.at(idx); // point4 - check if cur exists
		if (cur == null) 
			return;

		return this.removeNode(cur);
	}

	removeNode(elem) {
		if (elem.next) {
			elem.next.prev = elem.prev;
		}
		if (elem.prev) {
			elem.prev.next = elem.next; 
		}
		if (elem === this.tail) { // point5 - check if it's tail when removing a node
			this.tail = elem.prev;
		}
		if (elem === this.head) { // point6 - check if it's head when removing a node
			this.head = elem.next;
		}
		return elem;
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

	add(val) {
		const newNode = new LinkedListNode();
		newNode.data = val;
		return this.addNode(newNode);
	}

	addNode(newnode) {
		if (this.head == null) { // point6 - maybe the linkedlist is empty right now
			this.head = this.tail = newnode;
		} else {
			const tail = this.tail;
			newnode.prev = tail;
			tail.next = newnode;
			this.tail = newnode;
		}

		return newnode;
	}

	isEmpty() {
		return this.head == null && this.tail == null;
	}
}

exports.LinkedListNode = LinkedListNode;
exports.LinkedList = LinkedList;