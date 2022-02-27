/**
 * In this solution we can only use LinkedList as a SINGLY LinkedList,
 * which means the access of 'list.prev' can't be allowed.
 */

module.exports = function ReturnKthToLast(linkedList, kthToLast) {
	const res = recursive(linkedList.head, [], kthToLast);
	return res ? res.data : null;
i}

function recursive(linkedListNode, idxref, kthToLast) { // point1 - idxref is array as a ref-pointer to store value when recursing
	let res = null;
	if (linkedListNode) {
		res = recursive(linkedListNode.next, idxref, kthToLast);
		idxref[0]++;
		if (res === null && idxref[0] === kthToLast) {
			res = linkedListNode;
		}
	} else {
		idxref[0] = 0;
	}
	return res;
}