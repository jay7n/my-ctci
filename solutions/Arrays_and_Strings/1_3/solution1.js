module.exports = function URLify(str, length) {
	const arr = [];
	for (let i = 0; i < length; i++) {
		const c = str[i];
		if (c == ' ') {
			arr.push('%20');
		} else {
			arr.push(c);
		}
	}
	return arr.join('');
}