class TNode {
	data;	
	parent;
	left;
	right;

	get height() { // point1 - mind the way of solving the height
		let leftHeight = 0;
		if (this.left) {
			leftHeight = this.left.height;
		}
		let rightHeight = 0;
		if (this.right) {
			rightHeight = this.right.height;
		}
		return Math.max(leftHeight, rightHeight) + 1;
	}

	inorderTraverse(cb) {
		if (this.left) {
			this.left.inorderTraverse(cb);
		}
		cb(this);
		if (this.right) {
			this.right.inorderTraverse(cb);
		}
	}

	inorderTraverseToArray() {
		let res = [];
		this.inorderTraverse((nd) => {
			res.push(nd.data);
		});
		return res;
	}
}

class MinimalTree {
	rootNode;
	constructor(rawArray) {
		if (rawArray == null || rawArray.length == 0) { // point2 - mind rawArray might be empty
		} else {
			this.rootNode = new TNode();
			this._binaryTraverseArray(this.rootNode, rawArray, 0, rawArray.length - 1, (node, data) => {
				node.data = data;
			});
		}
	}

	toArray() {
		if (this.rootNode) {
			const res = this.rootNode.inorderTraverseToArray();
			return res;
		} else {
			return [];
		}
	}

	get height() {
		if (this.rootNode) {
			return this.rootNode.height;
		} else {
			return 0;
		}
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