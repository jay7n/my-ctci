class BinaryTreeNode {
	parent;
	left;
	right;
	data;

	constructor(data) {
		this.data = data;
	}

	addLeftChildByData(data) {
		const node = new BinaryTreeNode(data);
		return this.addLeftChild(node);
	}

	addLeftChild(node) {
		if (node) {
			this.left = node;
			node.parent = this;
		}
		return node;
	}

	addRightChildByData(data) {
		const node = new BinaryTreeNode(data);
		return this.addRightChild(node);
	}

	addRightChild(node) {
		if (node) {
			this.right = node;
			node.parent = this;
		}
		return node;
	}

	preOrderDfsToArray(node, array = []) {
		if (node) {
			array.push(node.data);
			this.preOrderDfsToArray(node.left, array);
			this.preOrderDfsToArray(node.right, array);
		}
		return array;
	}
}

module.exports = {
	BinaryTreeNode
}