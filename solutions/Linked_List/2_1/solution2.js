module.exports = function RemoveDups(linkedList) {
	let anchor = linkedList.head;
	while(anchor) {
		let cur = anchor.next;	
		while(cur) {
			if (cur.data === anchor.data) {
				linkedList.remove(cur);
			}
			cur = cur.next;
		}
		anchor = anchor.next;
	}
	return linkedList.toArray();
}