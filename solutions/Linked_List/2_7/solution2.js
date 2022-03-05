module.exports = function Intersection(linkedList1, linkedList2) {
	function* recursiveGen(node) { // point1 - master the use of usecase of RECURSIVE-GENERATOR 
		if (node) {
			yield* recursiveGen(node.next);
			yield node;
		}
	}

	const recur1 = recursiveGen(linkedList1.head);
	const recur2 = recursiveGen(linkedList2.head);

	let resnode = null, done1, done2;
	do {
		const {value:node1, done: d1} = recur1.next();
		const {value:node2, done: d2} = recur2.next();
		done1 = d1;
		done2 = d2;
		if (node1 === node2 && node1 != null) { // point2 - remember to check the condition of ndoe != null
			resnode = node1;
		} else {
			recur1.return();
			recur2.return();
		}
	} while (done1 == false || done2 == false);

	return resnode; 

}