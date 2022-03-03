const {LinkedList } = require('../../../datastructures/LinkedList/solution1');

module.exports = function SumListsReverseOrder(linkedList1, linkedList2) {
	const resList = new LinkedList();
	let runner1 = linkedList1.head;
	let runner2 = linkedList2.head;
	let carry = 0;

	while(runner1 || runner2 || carry > 0) { // point1 - note the additional condition 'carry > 0' even when two runners has get to the end
		let digitsum = getNodeDataOrZero(runner1) + getNodeDataOrZero(runner2) + carry;
		if (digitsum >= 10) {
			carry = 1;
			digitsum -= 10;
		} else {
			carry = 0;
		}
		resList.add(digitsum);

		runner1 = runner1 ? runner1.next : null;
		runner2 = runner2 ? runner2.next : null;
	}

	return resList;
}

function getNodeDataOrZero(node) {
	return node ? node.data : 0;
}