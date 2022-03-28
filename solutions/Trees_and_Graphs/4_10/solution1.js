module.exports = function CheckSubTree(T2, T1) {
	function identicalTrees(t1, t2) {

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