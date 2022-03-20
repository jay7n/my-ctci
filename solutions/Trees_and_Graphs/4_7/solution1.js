const { Graph } = require('../../../datastructures/Graph/solution1');

module.exports = function BuildOrder(input) {
	let {projects, dependencies} = input || {};
	if (projects == null || projects.length == 0) {
		return [];
	}

	if (dependencies == null ||dependencies.length == 0) {
		return projects;
	}

	const G = buildGraph(projects, dependencies);

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

function dfsTraverse(G, cb) {
	
}