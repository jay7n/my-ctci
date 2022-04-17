// The idea is to treat a tree as the way we treat a string.
// If we can somehow present the tree in a string form, 
// we can just simply check if S2 is a substring of S1.
// The way comparing strings is supposed to be a given and mature function.

module.exports = function CheckSubTree(T2, T1) {

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

function withNullPreOrderDFSTraverse(tNode, cb) {
  cb(tNode);
  withNullPreOrderDFSTraverse(tNode.left, cb);
  withNullPreOrderDFSTraverse(tNode.right, cb);
}