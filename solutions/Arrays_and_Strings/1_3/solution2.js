module.exports = function URLify(str, length) {
	if (length >= str.length) length = str.length;
	if (length <= 0) return '';

	let newLength = 0;
	for (let i = 0; i < length; i++) {
		newLength++;
		if (str[i] === ' ') {
			newLength += 2;
		}
	}
	const array = str.split('');
	array.length = newLength; // point1 - in javascript array length can be explicitly set

	let j = newLength - 1;
	for (let i = length - 1; i >= 0; i--) {
		if (array[i] === ' ') {
			array[j--] = '0';
			array[j--] = '2';
			array[j--] = '%';
		} else {
			array[j--] = array[i];
		}
	}

	return array.join('');

}