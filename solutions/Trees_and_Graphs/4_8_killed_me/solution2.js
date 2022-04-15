// This is the same algorithm as 2_7 solution2

module.exports = function CommonAncestor(rootNode, treeNode1, treeNode2) {
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
  let cur2 = treeNode2;
  while (cur1 !== cur2 && cur1 !== null) {
    cur1 = cur1.parent;
    cur2 = cur2.parent;
  }

  cur1 = cur1 ? cur1 : null;

  return cur1; // or cur2 is okay
}

function getDepthFromRoot(tNode) {
  let count = 0;
  while(tNode) {
    count++;
    tNode = tNode.parent;
  }
  return count;
}

function goUpLevels(tNode, levelNum) {
  let cur = tNode;
  for (let i = 0; i < levelNum && cur; i++) {
    cur = cur.parent;
  }
  return cur;
}