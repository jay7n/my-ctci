
module.exports = class BSTSequences {
	rootNode;

	constructor(rootNode) {
		this.rootNode = tNode;
	}

	postOrderTraverse(tNode, cb) {
		if (tNode) {
			postOrderTraverse(tNode.left, cb);
			postOrderTraverse(tNode.right, cb)
			cb(tNode);
		}
	}

	static GetWeavedArrays(array1, array2) {

	}


	getAllSequences() {

	}

}