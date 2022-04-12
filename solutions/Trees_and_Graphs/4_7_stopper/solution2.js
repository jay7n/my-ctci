const { Graph } = require('../../../datastructures/Graph/solution1');

module.exports = function BuildOrder(input) {
  let {projects, dependencies} = input || {};
	if (projects == null || projects.length == 0) {
		return [];
	}

  const pg = buildGraph(projects, dependencies);

}

function buildGraph(projects, dependencies) {
  const pg = new ProjGraph();
  projects.forEach(name => {
    const gNode = new ProjGraphNode(name);
    pg.addProjNode(gNode);
  });
  dependencies.forEach(({onName, depName}) => {
    const onNode = pg.depsMap[onName];
    const depNode = pg.depsMap[depName];
    pg.addDependency(depNode, onNode)
  });
  return pg;
}


class ProjGraph {
  nodes;
  nodesMap;
  
  constructor() {
    this.nodes = [];
    this.nodesMap = {};
  }

  addProjNode(gNode) {
    this.nodes.push(gNode);
    this.nodesMap[gNode.name] = gNode;
  }

  addDependency(depNode, onNode) {
    onNode.addDependencyOnMe(depNode);
  }
}

class ProjGraphNode {
  name;
  deps; // list of dependencies on me
  depsMap;

  constructor(name) {
    this.name = name;
    this.deps = [];
    this.depsMap = {};
  }

  addDependencyOnMe(gNode) {
    this.deps.push(gNode);
    this.depsMap[gNode.name] = gNode;
  }
}