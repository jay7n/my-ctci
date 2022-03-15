module.exports = function RouteBetweenNodes(n1, n2) {
	let hasAPath = false;
	bfs(n1.neighbors, (v) => {
		if (v === n2) {
			hasAPath = true;
		}
	});
	return hasAPath;
}

function bfs(vs, cb) {
	let queue = vs.slice(); // queue is pretty useful when process a bfs problem
	while(queue.length > 0) {
		const v = queue.splice(0, 1)[0];
		queue = queue.concat(v.neighbors.slice());
		const found = cb(v);
		if (found) {
			break;
		}
	}
}