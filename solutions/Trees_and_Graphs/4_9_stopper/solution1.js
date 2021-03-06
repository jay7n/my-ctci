
module.exports = class BSTSequences {
	rootNode;

	constructor(rootNode) {
		this.rootNode = rootNode;
	}

	getTNodeSeq(tNode) {
		if (tNode) {
			let resArrays = [];

			let leftArrays = this.getTNodeSeq(tNode.left);
			let rightArrays = this.getTNodeSeq(tNode.right);

			// console.log('tNode data = ', tNode.data);
			// console.log('leftArrays = ', leftArrays);
			// console.log('rightArrays = ', rightArrays);

			if (leftArrays && rightArrays) {
				for (const la of leftArrays) {
					for (const ra of rightArrays) {
						// console.log('la = ', la, 'ra = ', ra);
						resArrays = resArrays.concat(BSTSequences.GetWeavedArrays(la, ra));
						// console.log('in loop resArrays = ', resArrays);
					}
				}
				resArrays.forEach(array => array.splice(0,0,tNode.data));
			} else if (leftArrays) {
				leftArrays.forEach(array => array.splice(0,0,tNode.data));
				resArrays = leftArrays; // point1 - remember to assign resArrays!
			} else if (rightArrays) {
				rightArrays.forEach(array => array.splice(0,0,tNode.data));
				resArrays = rightArrays; // point2 - remember to assign resArrays!
			} else {
				resArrays = [ [tNode.data] ];
			}

			// console.log('resArrays = ', resArrays);
			return resArrays;
		}
		return null;
	}

	getAllSequences() {
		const res = this.getTNodeSeq(this.rootNode);
		// console.log('getAllSequences = ', res);
		return res;
	}

	static GetWeavedArrays(array1, array2) {
		if (array1 == null || array1.length == 0) {
			return [array2.slice()]; // point2 - should copy array, or else the original array would be modified at external level
		} else if (array2 == null || array2.length == 0) {
			return [array1.slice()]; // point2 - should copy array, or else the original array would be modified at external level
		}

		const array1Head = array1.splice(0,1)[0];
		// console.log('array1 = ', array1);
		let res1 = BSTSequences.GetWeavedArrays(array1, array2);
		res1.map(arr => {
			return arr.splice(0,0,array1Head);
		});
		// console.log('res1 = ', res1);

		array1.splice(0,0,array1Head);

		const array2Head = array2.splice(0,1)[0];
		// console.log('array2 = ', array2);
		let res2 = BSTSequences.GetWeavedArrays(array1, array2);
		res2.map(arr => {
			return arr.splice(0,0,array2Head);
		});
		// console.log('res2 = ', res2);

		array2.splice(0,0,array2Head);

		return [].concat(res1, res2);
	}

}