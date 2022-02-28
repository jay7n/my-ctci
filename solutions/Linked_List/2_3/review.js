/**
 * Solution1 Ideas:
 *
 * The real issue in this question is that we're given a list-node, which is at
 * somewhere in a singly-linked-list, and we're required to delete it while
 * keeping the list connected at the same time.
 *
 * Deleting a node in a linked list means that we need to know the previous
 * node, which we actually couldn't do in a SINGLY linked list. This is where
 * the problem lies. In a singly linked list, the given node is just the first
 * node that you only can see.
 *
 * But we can still manage to solve it in an indirect way. We can copy the next
 * node'data to the current one and reset the link relationship around next
 * node, which is to actually delete next one and reconnect the next of next
 * node to the current one. After copying the data, the current node is just
 * 'equal' to the next one, which could be safely deleted at the time.
 *
 * Remarks (with questions):
 *
 * The title says 'a middle node neither be the first nor the last'. based on my
 * understanding, the head of a linkedList shouldn't be the target(if the head
 * of the given list is given, it should return false and do nothing).
 *
 * This can not be achieved technologically however. We can never know know the
 * given node is or not the head of a singly linked list.
 *
 * Beyond this, this question is a bit like Brain-Teaser in my POV. Faking a
 * node (by copying and deleting the next) is kind of risky in real scenarios. I
 * don't know, it's just my intuition.
 */