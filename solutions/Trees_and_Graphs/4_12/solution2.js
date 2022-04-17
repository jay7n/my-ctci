// Since the question is asking how many paths there is 
// satisfying the condition, we don't necessarily need to 
// list all possible paths. Instead, just knowing the total
// count is a way to go.

module.exports = function PathsWithSum(tNode, givenSum) {
  let totalPathCount = 0;
  let hashMap = {};

  function preOrderDFSTraverse(tNode, runningSum = 0) {
    if (tNode) {
      runningSum += tNode.data;
      if (hashMap[runningSum] == null) {
        hashMap[runningSum] = 0;
      }
      hashMap[runningSum]++;

      // console.log('hashMap = ', hashMap);

      if (runningSum === givenSum) { // point1 - remember to check runningSum itself
        totalPathCount++;
      }

      if (hashMap[runningSum - givenSum] > 0) { // point2 - it's 'runningSum - givenSum' not 'givenSum - runningSum' (current runningSum - some sum in hashMap = givenSum)
        totalPathCount++;
      }

      preOrderDFSTraverse(tNode.left, runningSum);
      preOrderDFSTraverse(tNode.right, runningSum);

      hashMap[runningSum]--;
    }
  }

  preOrderDFSTraverse(tNode);

  return {
    paths: null,
    totalPathCount
  };
}
