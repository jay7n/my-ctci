module.exports = function Successor(treeNode) {
	if (treeNode) {
		if (treeNode.right) { // if treeNode has right branch, the successor is the leftmost leaf of the right branch
			let cur = treeNode.right;
			while(cur.left) {
				cur = cur.left;
			}
			return cur;
		} else if (treeNode.parent && treeNode.parent.left == treeNode) { // or else if treeNode is the left child of its parent, then the successor is the parent
			return treeNode.parent;
		} else if (treeNode.parent && treeNode.parent.right == treeNode) { // or else if treeNode is the right child of its parent, then the successor is the rightmost parent when traversing along the tree up
			let cur = treeNode.parent;
			while(cur.parent && cur.parent.right == cur) {
				cur = cur.parent;
			}
			if (cur.parent && cur.parent.left == cur) {
				return cur.parent;
			}
		}
	}
	return null;
}