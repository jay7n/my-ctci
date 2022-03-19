module.exports = function CheckBalanced(treeNode) {
	function postOrderTraverse(tNode) {
		if (tNode) {
			let leftRes = {height: 0, balanced: true};
			let rightRes = {height: 0, balanced: true};
			let balanced = true;

			if (tNode.left) {
				leftRes = postOrderTraverse(tNode.left);
				if (leftRes.balanced == false) {
					balanced = false;
				};
			}
			if (tNode.right) {
				rightRes = postOrderTraverse(tNode.right);
				if (rightRes.balanced == false) {
					balanced = false;
				};
			}

			if (Math.abs(leftRes.height - rightRes.height) > 1) {
				// console.log('left node = ', tNode.left);
				// console.log('right node = ', tNode.right);
				balanced = false;
			}

			return {
				height: Math.max(leftRes.height, rightRes.height) + 1,
				balanced
			};
			
		}
		return {
			height: 0,
			balanced: true
		};
	}

	const res = postOrderTraverse(treeNode);
	console.log('res = ', res);
	return res.balanced;
}