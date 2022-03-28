module.exports = function CheckSubTree(T2, T1) {
	function identicalTrees(t1, t2) {
		if (t1 == null && t1 == t2) {
			return true;
		} else if (t1 != null && t2 != null && t1.data == t2.data) {
			return identicalTrees(t1.left, t2.left) && identicalTrees(t1.right, t2.right);
		} else {
			return false;
		}
	}

	function preOrderBFSTraverse(tNode, cb) {
		let array = [tNode];
		while(array.length > 0) {
			const node = array.splice(0, 1)[0];
			if (node) {
				cb(node);
				array.push(node.left);
				array.push(node.right);
			}
		}
	}

	let isIdentical = false;
	preOrderBFSTraverse(T1, (nodeInT1) => {
		if (isIdentical !== true) {
			isIdentical = identicalTrees(nodeInT1, T2);
		}
	});

	return isIdentical;
}