module.exports = function MagicIndex(array) {
  const magicIdxList = [];

  // NOTE: the recursive-branch order is important if we want to put indices orderly without a manually sort
  // Notice the -ORDER- mark below

  function recursive(start, end) {
    if (end < start) return; // point1 - remember to do this check
    const mid  = start + Math.floor((end - start) / 2);
    if (array[mid] > mid) {
      let greaterIdx = array[mid];
      while (greaterIdx <= end) {
        if (array[greaterIdx] > greaterIdx) {
          greaterIdx = array[greaterIdx];
        } else { // must be greaterIdx == array[greaterIdx]
          recursive(greaterIdx + 1, end); // -ORDER-
          magicIdxList.unshift(greaterIdx); // -ORDER-
          break;
        }
      }
      recursive(start, mid-1);
    } else if (array[mid] === mid) {
      recursive(mid+1, end); // -ORDER-
      magicIdxList.unshift(mid); // -ORDER-
      recursive(start, mid-1); // -ORDER-
    } else { // must be array[mid] < mid
      recursive(mid+1, end); // -ORDER-
      let lessIdx = array[mid];
      while (lessIdx >= start) {
        if (array[lessIdx] < lessIdx) {
          lessIdx = array[lessIdx];
        } else { // must be lessIdx == array[lessIdx]
          magicIdxList.unshift(lessIdx); // -ORDER-
          recursive(start, lessIdx - 1); // -ORDER-
          break;
        }
      }
    }
  }

  recursive(0, array.length - 1);
  console.log('magicIdxList = ', magicIdxList);
  return magicIdxList;
}