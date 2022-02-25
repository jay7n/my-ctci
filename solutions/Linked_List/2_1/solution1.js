module.exports = function RemoveDups(linkedList) {
	const set = new Set(); // for convenience just use javascript's builtin Set here
	let curptr = linkedList.head;
	console.log('linkedListNode = ', curptr);
	while (curptr) {
		if (set.has(curptr.data)) {
			deleteMyselfInLinkedList(curptr);
		} else {
			set.add(curptr.data);
		}
		curptr = curptr.next; // point1 - don't forget to roll to next one manually
	}
	return linkedList.toArray();
}

function deleteMyselfInLinkedList(linkedListNode) {
	if (linkedListNode.next) {
		linkedListNode.next.prev = linkedListNode.prev;
	}

	linkedListNode.prev.next = linkedListNode.next; // remark1 - no need to check if-prev-exists-condition here
}