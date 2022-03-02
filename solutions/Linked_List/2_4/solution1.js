const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

module.exports = function Partition(linkedList, partitionVal) {
	console.log('original linkedList = ', linkedList.toArray());

	const listLowerThan = new LinkedList();
	const listGreatorThan = new LinkedList();

	let cur = linkedList.head;
	while(cur) {
		if (cur.data < partitionVal) {
			listLowerThan.add(cur.data);
		} else {
			listGreatorThan.add(cur.data);
		}
		cur = cur.next;
	}

	let resList;
	if (listLowerThan.head && listGreatorThan.head == null) {
		resList = listLowerThan;
	} else if (listLowerThan.head == null && listGreatorThan.head) {
		resList = listGreatorThan;
	} else if (listLowerThan.head && listGreatorThan.head) {
		resList = concatLinkedList(listLowerThan, listGreatorThan);
	} else {
		resList = linkedList.toArray();
	}

	console.log('resList = ', resList.toArray());

	return resList.toArray();
}

function concatLinkedList(l1, l2) {
	l1.tail.next = l2.head;
	l2.head.prev = l1.tail;
	return l1;
}