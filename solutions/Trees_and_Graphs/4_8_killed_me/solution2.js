// This is the same algorithm as 2_7 solution2

module.exports = function CommonAncestor(treeNode1, treeNode2) {
  // get their own depths counting from the root
  const d1 = getDepthFromRoot(treeNode1);
  const d2 = getDepthFromRoot(treeNode2);

  // chop off the deeper tree node so that both they have the same depth 
  if (d1 > d2) {
    treeNode1 = goUpLevels(treeNode1, d1 - d2);
  } else {
    treeNode2 = goUpLevels(treeNode2, d2 - d1);
  }

  // now the two nodes are same high
  let cur1 = treeNode1;
  let cur2 = treeNode1;
  while (cur1 !== cur2 && cur1 !== null) {
    cur1 = cur1.parent;
    cur2 = cur2.parent;
  }

  return cur1; // or cur2 is okay
}

function getDepthFromRoot(tNode) {

}

function goUpLevels(tNode, levelNum) {

}