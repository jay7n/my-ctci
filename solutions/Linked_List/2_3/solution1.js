module.exports = function DeleteMiddleNode(linkedListNode) {
	if (linkedListNode == null || linkedListNode.next == null) {
		// the operated node can neither be empty nor be the last one
		return false;
	}

	// delete current node by copying the next node to it and delete the next,
	// since the node being deleted is at a singly linked list, there is no way to access to the previous node directly
	// the consequence is the linked list would not be able to reconnect again.
	// but by deleting the next one we can do that. so the 'Copying' idea is the core here.
	linkedListNode.data = linkedListNode.next.data;
	linkedListNode.next = linkedListNode.next.next;
	return true;
}