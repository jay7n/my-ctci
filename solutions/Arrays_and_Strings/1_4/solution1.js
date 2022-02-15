module.exports = function PalindromePermutation(str) {
	const  array = new Array(128).fill(0);

	let strLength = 0;
	for (const c of str) {
		array[c.charCodeAt()]++;
		strLength++;
	}

	let oddElemNum = 0; // point1.1 - it won't work if just use a boolean (such as 'hasOddElem') varaible to check this nature
	for (const elem of array) {
		if (elem % 2 === 1) {
			oddElemNum++;
			if (oddElemNum > 1) {
				return false; // point2 - 'oddElemNum' can only be zero or one. if we can return early if it exceeds one.
			}
		} 
	}

	// point1.2 - 
	// for example, 
	// 'abc' has the str length === 3 and 'hasOddElem' === true, 
	// but 'abc' is never a palindrome

	const strLenIsEven = strLength % 2 === 0;
	if (strLenIsEven === true && oddElemNum === 0) {
		return true;
	} else if (strLenIsEven === false && oddElemNum === 1) {
		return true;
	} else {
		return false;
	}
}