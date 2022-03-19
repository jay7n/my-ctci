module.exports = function ValidateBST(treeNode) {
	function inOrderTraverse(node, cb) {
		if (node) {
			inOrderTraverse(node.left, cb);
			if (cb(node.data)) {
				inOrderTraverse(node.right, cb);
			}
		}
	}

	let prevOfPrevData;
	let prevData;
	let compareMode;
	let isBST = true;

	inOrderTraverse(treeNode, (data) => {
		console.log('data = ', data);
		if (prevOfPrevData == null) {
			prevOfPrevData = data;
		} else if (prevData == null) {
			prevData = data;
			if (prevData >= prevOfPrevData) {
				compareMode = 'gt';
			} else {
				compareMode = 'lt';
			}
		} else {
			if (compareMode === 'gt' && data < prevData) {
				isBST = false;
				return false;
			} else if (compareMode === 'lt' && data > prevData) {
				isBST = false;
				return false;
			}
			prevData = data;
		}
		return true;
	});

	return isBST;
}