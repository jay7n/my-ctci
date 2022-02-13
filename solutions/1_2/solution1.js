
function CheckPermutation(str1, str2) {
	if (str1.length != str2.length) 
		return false;

	const arr = new Array(128).fill(0);

	for (const c of str1) {
		arr[c.charCodeAt()]++;
	}

	for (const c of str2) {
		arr[c.charCodeAt()]--;
	}

	for (const elem of arr) {
		if (elem !== 0)
			return false;
	}

	return true;
}
module.exports = CheckPermutation;