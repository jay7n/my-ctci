const {LinkedList, LinkedListNode } = require('../../../datastructures/LinkedList/solution1');

module.exports = function SumListsForwardOrder(linkedList1, linkedList2) {

	let resListNode;
	let nextListNode;
	let tailListNode;
	let carry = 0;

	function recursive(node1, node2, cb) { // point1 - this version can't work since it didn't consider the NUMBER of DIGITS(e.g. 9 and 999) between the two list are not the same
		if (node1 || node2) {
			const next1 = node1 ? node1.next : null;
			const next2 = node2 ? node2.next : null;
			recursive(next1, next2, cb);
			cb(node1, node2);
		}
	}

	function recursiveV2(node1, node2, cb) {
		if (node1.next || node2.next) {
			const next1 = node1.next || node1;
			const next2 = node2.next || node2;
			recursiveV2(next1, next2, cb);
			cb(next1==node1 ? null : node1, next2==node2 ? null : node2);
		} else {
			cb(node1, node2);
		}
	}

	recursiveV2(linkedList1.head, linkedList2.head, (node1, node2) => {
		const d1 = node1 ? node1.data : 0;
		const d2 = node2 ? node2.data : 0;
		let res = d1 + d2 + carry;
		if (res >= 10) {
			res -= 10;
			carry = 1;
		} else {
			carry = 0;
		}
		console.log('d1 = ', d1, 'd2 = ', d2, 'carry = ', carry, 'res = ', res);
		resListNode = new LinkedListNode();
		resListNode.data = res;
		resListNode.next = nextListNode;
		if (nextListNode) {
			nextListNode.prev = resListNode;
		} else {
			tailListNode = resListNode;
		}
		nextListNode = resListNode;
	});

	if (carry > 0) { // point2 - need to consider the first digit case as it's a backward traverse order
		resListNode = new LinkedListNode();
		resListNode.data = carry;
		resListNode.next = nextListNode;
	}

	const resList = new LinkedList();
	resList.head = resListNode;
	resList.tail = tailListNode;

	return resList;
}
