module.exports = function Palindrome(linkedList) {
	let res = false;
	let frunner = null;
	let shouldgoon = true;
	let len = 0;
	let counter = 0;

	function recursive(node, cb1, cb2) {
		if (node) {
			len++;
			recursive(node.next, cb1, cb2);
			cb1(node);
		} else {
			cb2();
		}
	}

	function frunninghalf() {
		return counter >= len / 2;
	}

	recursive(linkedList.head, (nodeReverseOrder) => {
		if (shouldgoon == true) {
			res = nodeReverseOrder.data == frunner.data;
			console.log('b =', nodeReverseOrder.data, 'f = ', frunner.data, 'res = ', res);
			if (frunninghalf() == false) {
				frunner = frunner.next;
				counter++;
			} else {
				shouldgoon = false;
			}
		}

	}, () => {
		frunner = linkedList.head;
		counter++;
	});


	return res;
}