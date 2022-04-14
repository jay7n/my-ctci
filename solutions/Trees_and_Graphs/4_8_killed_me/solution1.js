module.exports = function CommonAncestor(treeNode1, treeNode2) {
	function findInNode(inTNode, tNodeToFind) {
		if (inTNode) {
			if (inTNode == tNodeToFind) {
				return true;
			}

			let found = findInNode(inTNode.left, tNodeToFind);
			if (found) return true;

			found = findInNode(inTNode.right, tNodeToFind);
			if (found) return true;

		}
		return false;
	}

	function getSiblingNode(tNode) {
		let siblingTNode;
		if (tNode && tNode.parent) {
			if (tNode.parent.left == tNode) {
				siblingTNode = tNode.parent.right;
			} else if (tNode.parent.right == tNode) {
				siblingTNode = tNode.parent.left;
			}
		}
		return siblingTNode;
	}

	if (findInNode(treeNode1, treeNode2)) {
		return treeNode1;
	}
	if (findInNode(treeNode2, treeNode1)) {
		return treeNode2;
	}

	let cur1 = getSiblingNode(treeNode1);
	let cur2 = getSiblingNode(treeNode2);
	let res = null;

	while (true) {
		if (cur1 == null && cur2 == null) {
			break;
		}
		if (findInNode(cur1, treeNode2)) {
			res = cur1;
			break;
		}
		if (findInNode(cur2, treeNode1)) {
			res = cur2;
			break;
		}

		if (cur1) {
			cur1 = getSiblingNode(cur1.parent);
		}
		if (cur2) {
			cur2 = getSiblingNode(cur2.parent);
		}
	}

	if (res) {
		return res.parent;
	}
	return null;
}