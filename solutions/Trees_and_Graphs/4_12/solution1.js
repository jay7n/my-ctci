const { Stack } = require('../../../datastructures/Stack/solution1');

module.exports = function PathsWithSum(tNode, sum) {
  function postOrderDfsTraverse(node, cb) {
    if (node) {
      postOrderDfsTraverse(node.left, cb);
      postOrderDfsTraverse(node.right, cb);
      cb(node);
    }
  }

  let totalStacks = [];

  postOrderDfsTraverse(tNode, node => {
    let cur = node;
    let accSum = 0;
    const st = new Stack();

    while(cur) {
      st.push(cur.data);
      accSum += cur.data;

      if (accSum === sum) {
        break;
      }

      cur = cur.parent;
    }

    if (accSum === sum) {
      totalStacks.push(st);
    }
  });

  const res = totalStacks.map(st => {
    const res = st.popToArray();
    return res.join('->');
  });

  // console.log('res = ', res);
  return {
    paths: res,
    totalPathCount: res.length
  }
}