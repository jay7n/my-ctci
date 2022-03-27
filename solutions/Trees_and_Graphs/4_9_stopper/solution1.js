
module.exports = class BSTSequences {
	rootNode;

	constructor(rootNode) {
		this.rootNode = tNode;
	}

	getTNodeSeq(tNode) {
		if (tNode) {
			let resArrays = [];

			let leftArrays = this.getTNodeSeq(tNode.left);
			let rightArrays = this.getTNodeSeq(tNode.right);

			if (leftArrays && rightArrays) {
				for (const la of leftArrays) {
					for (const ra of rightArrays) {
						resArrays = resArrays.concat(BSTSequences.GetWeavedArrays(la, ra));
					}
				}
				resArrays = resArrays.map(array => array.splice(0,0,tNode.data));
			} else if (leftArrays) {
				resArrays = leftArrays.map(array => array.splice(0,0,tNode.data));
			} else if (rightArrays) {
				resArrays = rightArrays.map(array => array.splice(0,0,tNode.data));
			} else {
				return [ [tNode.data] ];
			}
		}
		return null;
	}

	static GetWeavedArrays(array1, array2) {

	}


	getAllSequences() {
		const res = this.getTNodeSeq(this.rootNode);
		console.log('getAllSequences = ', res);
		return res;
	}

}