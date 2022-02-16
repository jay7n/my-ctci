module.exports = function StringCompression(str) {
	const strlen = str.length;

	if (strlen === 0) {
		return str;
	}

	let array = [];
	let prevChar = str[0];
	let count = 1;
	for (let i = 1; i < strlen; i++) {
		const c = str[i];
		if (prevChar !== c) {
			array.push(prevChar);
			array.push(count);
			prevChar = c;
			count = 1;
		} else {
			count++;
		}
	}

	// point1 - don't forget to call array.push() again to enclose the ends of str
	// since the for-loop-logic we traversed above did not take care of them.
	array.push(prevChar);
	array.push(count);

	if (array.length >= strlen) {
		return str;
	}

	const compressed = array.join('');
	return compressed;
}