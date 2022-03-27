
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
				resArrays = [ [tNode.data] ];
			}

			console.log('resArrays = ', resArrays);
		}
		return null;
	}

	getAllSequences() {
		const res = this.getTNodeSeq(this.rootNode);
		console.log('getAllSequences = ', res);
		return res;
	}

	static GetWeavedArrays(array1, array2) {
		if (array1 == null || array1.length == 0) {
			return [array2];
		} else if (array2 == null || array2.length == 0) {
			return [array1];
		}

		const array1Head = array1.splice(0)[0];
		let res1 = BSTSequences.GetWeavedArrays(array1, array2);
		res1.map(arr => {
			return arr.splice(0,0,array1Head);
		});

		array1.splice(0,0,array1Head);

		const array2Head = array2.splice(0)[0];
		let res2 = BSTSequences.GetWeavedArrays(array1, array2);
		res2.map(arr => {
			return arr.splice(0,0,array2Head);
		});

		array2.splice(0,0,array2Head);

		return [].concat(res1, res2);
	}

}