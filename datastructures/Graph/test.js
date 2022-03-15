const { GraphVertex, Graph } = require('./solution1');

const testWithSolution = function(title) {
	test(title + ': ' +
	'', () => {
		const graph = new Graph();
		for (let i = 0; i < 5; i++) {
			const vert = new GraphVertex(`v${i}`);
			graph.addVertex(vert);
		}

		for (let i = 5; i < 10; i++) {
			graph.addVertexByData(`v${i}`);
		}

		const v0 = graph.getVertexByData('v0');
		expect(graph.includeVert(v0)).toBe(true);

		const v5 = graph.getVertexByData('v5');
		expect(graph.includeVert(v5)).toBe(true);


		const vs = graph.vertices;
		vs[0].addNeighborVert(vs[1]);
		vs[0].addNeighborVert(vs[2]);
		vs[0].addNeighborVert(vs[3]);
		vs[0].addNeighborVert(vs[4]);

		graph.addEdge(vs[5], vs[6]);
		graph.addOneWayEdge(vs[7], vs[8]);

		vs[1].addNeighborVert(vs[2]);
		vs[1].addNeighborVert(vs[3]);
		vs[1].addNeighborVert(vs[4]);

		vs[2].addNeighborVert(vs[3]);
		vs[2].addNeighborVert(vs[4]);

		vs[3].addNeighborVert(vs[4]);

		graph.print();
	}
	);
}

testWithSolution('Solution1');