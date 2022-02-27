
/**
 * In this solution we can only use LinkedList as a SINGLY LinkedList,
 * which means the access of 'list.prev' can't be allowed.
 */

module.exports = function ReturnKthToLast(linkedList, kthToLast) {
	if (linkedList.head && kthToLast > 0) {
		let prt1, ptr2;
		ptr1 = ptr2 = linkedList.head;

		let count = 1;
		while(ptr1) {
			if (count > kthToLast) { // point1 - count should be greater > (not greater or equal >=) than kthToLast
				ptr2 = ptr2.next;
			}
			count++;
			ptr1 = ptr1.next;
		}

		const len = count - 1;
		if (kthToLast <= len && kthToLast >= 1) { // point2 - need to consider if kthToLast exceeds the boundaries !
			if (ptr2) { // point3 - ptr2 at this moment can still be null due to potential overflowed kthToLast idx access
				return ptr2.data;
			}
		}
		return null;
	}
	return null;
}