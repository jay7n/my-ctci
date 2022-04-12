module.exports = function BuildOrder(input) {
  let {projects, dependencies} = input || {};
	if (projects == null || projects.length == 0) {
		return [];
	}

  const pg = buildGraph(projects, dependencies);
  let finalRes = [];
  let curRes = [];
  do {
    curRes = getNonIncomingDepNodesInGraph(pg);
    cutOffDepOnNodes(curRes);
    finalRes = finalRes.concat(curRes);
  } while (curRes && curRes.length > 0);

  finalRes = finalRes.map(node => node.name);

  console.log('finalRes = ', finalRes);

  return finalRes;
}

function buildGraph(projects, dependencies) {
  const pg = new ProjGraph();
  projects.forEach(name => {
    const gNode = new ProjGraphNode(name);
    pg.addProjNode(gNode);
  });
  dependencies.forEach(({onName, depName}) => {
    const onNode = pg.findNodeByName(onName);
    const depNode = pg.findNodeByName(depName);
    if (onNode && depName) {
      pg.addDependency(depNode, onNode)
    }
  });
  return pg;
}

function getNonIncomingDepNodesInGraph(projGraph) {
  const res = [];
  for (const node of projGraph.nodes) {
    if (node.meDeps.length == 0) {
      res.push(node);
    }
  }
  return res;
}

function cutOffDepOnNodes(nodes) {
  for (const node of nodes) {
    node.removeAllMyDependencies();
  }
}


class ProjGraph {
  nodes;
  // nodesMap;
  
  constructor() {
    this.nodes = [];
    // this.nodesMap = {};
  }

  findNodeByName(name) {
    return this.nodes.find(node => node.name == name);
  }

  addProjNode(gNode) {
    this.nodes.push(gNode);
    // this.nodesMap[gNode.name] = gNode;
  }

  addDependency(depNode, onNode) {
    onNode.addDependencyOnMe(depNode);
  }
}

class ProjGraphNode {
  name;

  depsOnMe; // list of dependencies on me
  // depsOnMeMap;

  meDeps; // list of dependencies on which me depend

  constructor(name) {
    this.name = name;
    this.depsOnMe = [];
    // this.depsOnMeMap = {};
    this.meDeps = [];
  }

  addDependencyOnMe(gNode) {
    this.depsOnMe.push(gNode);
    gNode.meDeps.push(this);
    // this.depsOnMeMap[gNode.name] = gNode;
  }

  removeAllMyDependencies() {
    for (const node of this.depsOnMe) {
      const idx = node.meDeps.findIndex(d => d.name == this.name);
      if (idx !== -1) {
        node.meDeps.splice(idx, 1);
      }
    }
    this.depsOnMe = [];
  }

  // removeDependencyOnMe(gNode) {
  //   const idx1 = this.depsOnMe.findIndex(d => d.name == gNode.name);
  //   if (idx1 !== -1) {
  //     this.depsOnMe.splice(idx1, 1);
  //     const idx2 = gNode.meDeps.findIndex(d => d.name == this.name);
  //     gNode.meDeps.splice(idx2, 1);
  //     // delete this.depsOnMeMap[gNode.name];
  //   }
  // }
}