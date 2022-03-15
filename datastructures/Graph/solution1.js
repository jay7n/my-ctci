class GraphVertex {
	data;
	neighbors;

	constructor(data) {
		this.data = data;
		this.neighbors = [];
	}

	includeNeighbor(vert) {
		return this.neighbors.find(v => v === vert) != null;
	}

	addNeighborVert(vert) {
		if (this.includeNeighbor(vert) == false) {
			this.neighbors.push(vert);
		}
	}

	removeNeighborVert(vert) {
		const idx = this.neighbors.findIndex(v => v === vert);
		if (idx !== -1) {
			return this.neighbors.splice(idx, 1)[0];
		}
		return null;
	}
}

class Graph {
	vertices;

	constructor() {
		this.vertices = [];
	}

	addVertex(vert) {
		this.vertices.push(vert);
	}

	addVertexByData(vertData) {
		const vert = new GraphVertex(vertData);
		this.addVertex(vert);
	}

	includeVert(vert) {
		return this.vertices.find(v => v === vert) != null;
	}

	getVertexByData(vertData) {
		return this.vertices.find(v => v.data === vertData);
	}

	removeVertex(vert) {
		const idx = this.vertices.findIndex(v => v === vert);
		if (idx !== -1) {
			return this.vertices.splice(idx, 1)[0];
		}
		return null;
	}

	removeVertexByData(vertData) {
		const vert = this.getVertexByData(vertData);
		if (vert) {
			return this.removeVertex(vert);
		}
		return null;
	}

	addOneWayEdge(vertFrom, vertTo) {
		vertFrom.addNeighborVert(vertTo);
	}

	addEdge(vert1, vert2) {
		vert1.addNeighborVert(vert2);
		vert2.addNeighborVert(vert1);
	}

	removeOneWayEdge(vertFrom, vertTo) {
		return vertFrom.removeNeighborVert(vertTo);
	}

	removeEdge(vert1, vert2) {
		vert1.removeNeighborVert(vert2);
		vert2.removeNeighborVert(vert1);
	}

	print() {
		let resStr = '';
		this.vertices.map(v => {
			resStr += `${v.data}: ${v.neighbors.map(n => n.data).join(', ')}\n`;
		});
		console.log(resStr);
	}

}

module.exports = {
	GraphVertex,
	Graph
}