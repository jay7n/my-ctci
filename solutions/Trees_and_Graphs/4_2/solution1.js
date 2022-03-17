class TNode {
	data;	
	parent;
	left;
	right;

	get height() {

	}

	inorderTraverse() {

	}
}

class MinimalTree {
	rootNode;
	constructor(rawArray) {
		this.rootNode = new TNode();
		this._binaryTraverseArray(this.rootNode, rawArray, 0, rawArray.length - 1, (node, data) => {
			node.data = data;
			console.log(data);
		});
	}

	toArray() {
		return this.rootNode.toArray();
	}

	get height() {
		return this.rootNode.height;
	}

	_binaryTraverseArray(node, array, startIdx, endIdx, cb) {
		const midIdx = Math.floor((endIdx - startIdx) / 2) + startIdx;
		cb(node, array[midIdx]);
		if (midIdx > startIdx) {
			node.left = new TNode();
			node.left.parent = node;
			this._binaryTraverseArray(node.left, array, startIdx, midIdx - 1, cb);
		}
		if (midIdx < endIdx) {
			node.right = new TNode();
			node.right.parent = node;
			this._binaryTraverseArray(node.right, array, midIdx + 1, endIdx, cb);
		}
	}
}

module.exports = MinimalTree;