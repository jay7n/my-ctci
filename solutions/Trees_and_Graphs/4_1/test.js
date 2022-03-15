const { Graph } = require('../../../datastructures/Graph/solution1');

testWithSolution = function(title, Solution) {
	test(title + ': ' +
	'', () => {
		const g = new Graph();
		for (let i = 0; i < 10; i++) {
			g.addVertexByData(i);
		}
		const vs = g.vertices;
		g.addOneWayEdge(vs[0], vs[1]);
		g.addOneWayEdge(vs[0], vs[2]);
		g.addOneWayEdge(vs[0], vs[3]);
		g.addOneWayEdge(vs[1], vs[2]);
		g.addOneWayEdge(vs[1], vs[3]);
		g.addOneWayEdge(vs[1], vs[5]);
		g.addOneWayEdge(vs[2], vs[3]);
		g.addOneWayEdge(vs[3], vs[4]);
		g.addOneWayEdge(vs[4], vs[7]);
		g.addOneWayEdge(vs[5], vs[7]);
		g.addOneWayEdge(vs[5], vs[8]);
		g.addOneWayEdge(vs[8], vs[9]);

		let hasAPath = Solution(g, vs[0], vs[9]);
		expect(hasAPath).toBe(true);

		hasAPath = Solution(g, vs[2], vs[9]);
		expect(hasAPath).toBe(false);
	});
}

const Solution1 = require('./solution1');
testWithSolution('Solution1', Solution1);