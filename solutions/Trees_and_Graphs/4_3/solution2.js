const { LinkedList } = require('../../../datastructures/LinkedList/solution1');

module.exports = function ListOfDepths(rootTreeNode) {

  function preOrderDfsTraverse(tNode, depth) {
    if (tNode) {
      ;
      preOrderDfsTraverse(tNode.left, depth + 1);
      preOrderDfsTraverse(tNode.right, depth + 1);
    }
  }

  preOrderDfsTraverse(rootTreeNode, 0);
}