// The idea is to treat a tree as the way we treat a string.
// If we can somehow present the tree in a string form, 
// we can just simply check if S2 is a substring of S1.
// The way comparing strings is supposed to be a given and mature function.

module.exports = function CheckSubTree(T2, T1) {
  const s2 = treeToString(T2);
  console.log('s2 = ', s2);
  const s1 = treeToString(T1);
  console.log('s1 = ', s1);

  return s1.includes(s2);
}

function treeToString(tNode) {
  let strArray = [];
  preOrderDFSTraverse(tNode, (n) => {
    if (n == null) n = 'X';
    else n = n.data;
    strArray.push(n);
  });
  return strArray.join();
}

function preOrderDFSTraverse(tNode, cb) {
  cb(tNode);
  if (tNode) {
    cb(tNode);
    if (tNode.left || tNode.right) {
      preOrderDFSTraverse(tNode.left, cb);
      preOrderDFSTraverse(tNode.right, cb);
    }
  }
}