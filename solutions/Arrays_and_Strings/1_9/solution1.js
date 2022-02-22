module.exports = function StringRotation(str1, str2) {
	const str1str1 = str1 + str1;
	return onlyOneCallIsSubString(str1str1, str2);
}

function onlyOneCallIsSubString(str1, str2) {
	return str1.includes(str2);
}