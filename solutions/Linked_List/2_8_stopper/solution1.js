module.exports = function LoopDetection(linkedList) {
	let pfast, pslow;
	pfast = pslow = linkedList.head;

	let loop = true;
	do {
		if (pfast && pfast.next) {
			pfast = pfast.next.next;
		} else {
			pfast = null; // point1 - need to set pfast to null explicitly here since we're also detecting pfast.next.next
		}
		if (pslow) {
			pslow = pslow.next;
		}

		loop = (pslow != null) && (pfast != null) && (pfast != pslow);

	} while(loop);

	if (pslow == null || pfast == null) {
		return null;
	}

	pslow = linkedList.head;

	while(pfast != pslow) { // point2 - the loop-pattern here is different than the above. we need to consider the full-circular case (e.g. A->B->C->D->A)
		pslow = pslow.next;
		pfast = pfast.next;
	};

	return pslow;
}