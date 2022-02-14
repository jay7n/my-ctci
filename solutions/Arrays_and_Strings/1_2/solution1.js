
module.exports = function CheckPermutation(str1, str2) {
	if (str1.length != str2.length) 
		return false;

	const arr = new Array(128).fill(0);

	for (const c of str1) {
		arr[c.charCodeAt()]++;
	}

	for (const c of str2) {
		const elm = --arr[c.charCodeAt()];
		if (elm < 0) { // point1.1 - we can have an immediate check here to avoid a 3rd-round loop below (see point1.2)
			return false;
		}
	}

	/* point1.2 - see point1.2 above
	 *
	for (const elem of arr) {
		if (elem !== 0)
			return false;
	}
	*/

	return true;
}