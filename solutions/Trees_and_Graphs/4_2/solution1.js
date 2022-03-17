class TNode {
	data;	
	height;
	parent;
	left;
	right;
}

export default class MinimalTree {
	rootNode;
	constructor(rawArray) {
		this.rootNode = new TNode();
	}

	toArray() {

	}

	get height() {
		return this.rootNode.height;
	}

	_binaryTraverseArray(array, cb) {

	}
}
