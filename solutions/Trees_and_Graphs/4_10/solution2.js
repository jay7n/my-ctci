// The idea is to treat a tree as the way we treat a string.
// If we can somehow present the tree in a string form, 
// we can just simply check if S2 is a substring of S1.
// The way comparing strings is supposed to be a given and mature function.

// However only substring isn't strictly correct.
// It must follow the rule that, with cutting the node in T1,
// the cut out subtree is 'completely' identical with T2.
// So the subtree must be somewhere near the leaves of T1.
// Hence we need to keep how to check 'leaf node' in our mind.

module.exports = function CheckSubTree(T2, T1) {
  const s2 = treeToString(T2);
  // console.log('s2 = ', s2);
  const s1 = treeToString(T1);
  // console.log('s1 = ', s1);

  return s1.includes(s2); // we suppose string.includes() is allowed to use
}

function treeToString(tNode) {
  let strArray = [];
  withNullPreOrderDFSTraverse(tNode, (n) => {
    if (n == null) n = 'X';
    else n = n.data;
    strArray.push(n);
  });
  return strArray.join();
}

// Note: It's needed to insert two dumb children nodes 
// for even a bare leaf node, only with which we could
// guarantee that no more nodes beneath the leaves.
// 
function withNullPreOrderDFSTraverse(tNode, cb) {
  cb(tNode);
  if (tNode) {
    withNullPreOrderDFSTraverse(tNode.left, cb);
    withNullPreOrderDFSTraverse(tNode.right, cb);
  }
}