module.exports = function BSTSequences(treeNode) {
	function postOrderTraverse(tNode, cb) {
		if (tNode) {
			postOrderTraverse(tNode.left, cb);
			postOrderTraverse(tNode.right, cb)
			cb(tNode);
		}
	}

	return [
		[2,1,3],
		[2,3,1],
	]
}