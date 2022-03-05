module.exports = function Intersection(linkedList1, linkedList2) {
	function traverse(linkedList, cb) {
		let cur = linkedList.head;
		let shouldContinue = true;
		while(cur && shouldContinue) {
			shouldContinue = cb(cur);
			cur = cur.next;
		}
	}

	traverse(linkedList1, (node) => {
		node.marked = true;
		return true;
	});

	let resNode = null;
	traverse(linkedList2, (node) => {
		if (node.marked === true) {
			resNode = node;
			return false;
		}
		return true;
	});

	return resNode;
}