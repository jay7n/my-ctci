module.exports = function PanlindromePermutation(str) {
	const array = new Array(128).fill(0);
	let countOddElem = 0;
	let strLength = 0;
	for (const c of str) {
		strLength++;
		const count = ++array[c.charCodeAt()];
		if (count % 2 === 1) {
			countOddElem++;
		} else {
			countOddElem--;
		}
	}

	const strLenIsEven = strLength % 2 === 0;
	if (strLenIsEven === true && countOddElem === 0) {
		return true;
	} else if (strLenIsEven === false && countOddElem === 1) {
		return true;
	} else {
		return false;
	}
}