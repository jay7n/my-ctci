/** this solution is aim for the follow-up requirement of the question in which
 * condition a temporary buffer is not allowed to use.
 *
 * remarks: though we face a follow-up requirement, the solution is more like a
 * time-space tradeoff, rather than a better and upgraded solution idea.
 * 
 */ 
module.exports = function RemoveDups(linkedList) {
	let anchor = linkedList.head;
	while(anchor) {
		let cur = anchor.next;	
		while(cur) {
			if (cur.data === anchor.data) {
				linkedList.removeNode(cur);
			}
			cur = cur.next;
		}
		anchor = anchor.next;
	}
	return linkedList.toArray();
}