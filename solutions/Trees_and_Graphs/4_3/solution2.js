const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

module.exports = function ListOfDepths(rootTreeNode) {
  const resLists = [];

  function preOrderDfsTraverse(tNode, depth) {
    if (tNode) {
      if (resLists[depth] == null) {
        resLists[depth] = new LinkedList();
      }

      const list = resLists[depth];
      list.add(tNode.data);

      preOrderDfsTraverse(tNode.left, depth + 1);
      preOrderDfsTraverse(tNode.right, depth + 1);
    }
  }

  preOrderDfsTraverse(rootTreeNode, 0);

  // console.log('resLists = ', resLists.map(list => list.toArray()));

  return resLists.map(list => list.toArray());
}