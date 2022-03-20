const { Graph } = require('../../../datastructures/Graph/solution1');
const { Stack } = require('../../../datastructures/Stack/solution1');

module.exports = function BuildOrder(input) {
	let {projects, dependencies} = input || {};
	if (projects == null || projects.length == 0) {
		return [];
	}

	if (dependencies == null ||dependencies.length == 0) {
		return projects;
	}

	const G = buildGraph(projects, dependencies);

	if (detectCycle(G)) {
		return [];
	}

	const res = dfsPostOrderTraverse(G);
	return res;
}

function buildGraph(projects, dependencies) {
	const G = new Graph();
	projects = projects.map(p => {
		return G.addVertexByData({
			value: p,
			visited: false
		});
	});

	for (const kvPair of dependencies) {
		const k = Object.keys(kvPair)[0];
		const v = kvPair[k];
		const vFrom = G.getVertextByCustomCb((vert) => {
			return vert.data.value === k;
		});
		const vTo = G.getVertextByCustomCb((vert) => {
			return vert.data.value === v;
		});
		if (vFrom && vTo) {
			vFrom.addNeighborVert(vTo);
		}
	}

	G.print();
	return G;
}

function detectCycle(G) {
	let hasCycle = false;
	function recursive(vertex) {
		if (vertex.data.visited) {
			hasCycle = true;
			return;
		}
		vertex.data.visited = true;
		for (const ne of vertex.neighbors) {
			recursive(ne);
		}
		vertex.data.visited = false; // point1 - reset it back to 'unvisited' status. this is important for detecting cycles in DFS (it's a Stack way pattern)
	}
	for (const v of G.vertices) {
		recursive(v);
	}
	return hasCycle;
}

// BFS would'n be working in this question
// This is called Topological-Sort
// and a DFS with Reverse-Post-Order will work on this
//
function dfsPostOrderTraverse(G) {
	let res = new Stack(); // point2 - use a Stack to store result
	function recursive(vertex) {
		for (const ne of vertex.neighbors) {
			recursive(ne);
		}
		if (vertex.data.visited == false) {
			res.push(vertex.data.value);
			vertex.data.visited = true;
		}
	}
	for (const vert of G.vertices) {
		recursive(vert);
	}
	return res.popToArray(); // This would get the reversed order, as expected
}