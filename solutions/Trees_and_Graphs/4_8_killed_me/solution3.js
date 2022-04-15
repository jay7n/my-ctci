// Suppose there's no way to access to parent node, but given the root Node

module.exports = function CommonAncestor(rootNode, treeNode1, treeNode2) {

}

function coverInNode(inNode, tNode) {
  if (inNode === tNode) {
    return true;
  } else if (inNode) {
    return coverInNode(inNode.left, tNode) || coverInNode(inNode.right, tNode);
  } else {
    return false;
  }
}