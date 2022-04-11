const { Graph } = require('../../../datastructures/Graph/solution1');

module.exports = function BuildOrder(input) {
  let {projects, dependencies} = input || {};
	if (projects == null || projects.length == 0) {
		return [];
	}

}