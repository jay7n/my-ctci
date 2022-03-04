module.exports = function OneAway(str1, str2) {
	const str1len = str1.length;
	const str2len = str2.length;

	let edit = 'illegal';
	if (str2len == str1len + 1) {
		edit = 'insert';
	} else if (str2len == str1len - 1) {
		edit = 'remove';
	} else if (str2len == str1len) {
		edit = 'replace';
	}

	if (edit === 'illegal') {
		return false;
	}

	let doneEdit = false;
	let i = 0, j = 0;
	do {
	// point1 - generally for-loop is not very well to handle EMPTY strs
	// since empty str won't even launching a for-loop with idx starting from 0
	// e.g.  for (let i = 0; i < str1len; i++) {
		if (str1[i] !== str2[j]) {
			if (doneEdit === false) {
				doneEdit = true;
				if (edit === 'insert') {
					i--;
				} else if (edit === 'remove') {
					j--;
				} else {
					// this is a replace edit, do nothing here
				}
			} else {
				return false;
			}
		}
		i++;
		j++;
	} while (i < str1len);

	if (doneEdit === false) { // point2 - when str1 and str2 are exactly same, this shouldn't be seen as an 'one edit'
		return false;
	} else {
		return true;
	}
}