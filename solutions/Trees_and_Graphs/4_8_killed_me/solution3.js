// Suppose there's no way to access to parent node, but given the root Node

module.exports = function CommonAncestor(rootNode, treeNode1, treeNode2) {
  if (treeNode1 == treeNode2) {
    return treeNode1;
  }
  let res;
  const arr = [rootNode];
  while(arr.length > 0) {
    const cur = arr.splice(0, 1)[0];
    console.log('cur = ', cur.data);
    if (cur) {
      const firstInNode = coverInNode(cur, treeNode1);
      const secondInNode = coverInNode(cur, treeNode2);
      console.log('firstInNode = ', firstInNode);
      console.log('secondInNode = ', secondInNode);
      if (firstInNode && secondInNode) {
        arr.push(cur.left);
        arr.push(cur.right);
      } else if (firstInNode !== false && secondInNode !== false) {
         // do nothing
      } else if (firstInNode !== secondInNode) {
        res = cur.parent;
        console.log('res = ', res);
        break;
      }
    }
  }
  return res;
}

function coverInNode(inNode, tNode) {
  let res;
  if (inNode === tNode) {
    res = true;
  } else if (inNode) {
    res = coverInNode(inNode.left, tNode) || coverInNode(inNode.right, tNode);
  } else {
    res = false;
  }

  return res;
}

