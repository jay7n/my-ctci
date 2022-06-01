module.exports = function MagicIndex(array) {
  const todos = [];
  const magicIdxList = [];

  function recursive(start, end) {
    const mid  = start + Math.floor((end - start) / 2);
    if (array[mid] > mid) {
      let greaterIdx = array[mid];
      while (greaterIdx <= end) {
        if (array[greaterIdx] > greaterIdx) {
          greaterIdx = array[greaterIdx];
        } else { // must be greaterIdx == array[greaterIdx]
          magicIdxList.unshift(greaterIdx);
          break;
        }
      }
      if (greaterIdx <= end) {
        recursive(greaterIdx + 1, end);
      }
      recursive(start, mid-1);
    } else if (array[mid === mid]) {
      magicIdxList.unshift(mid);
      recursive(mid+1, end);
      recursive(start, mid-1);
    } else { // must be array[mid] > mid
      let lessIdx = array[mid];
      while (lessIdx >= start) {
        if (array[lessIdx] < lessIdx) {
          lessIdx = array[lessIdx];
        } else { // must be lessIdx == array[lessIdx]
          magicIdxList.unshift(lessIdx);
          break;
        }
      }
      if (lessIdx >= start) {
        recursive(start, lessIdx - 1);
      }
      recursive(mid+1, end);
    }
  }

  recursive(0, array.length - 1);
  console.log('magicIdxList = ', magicIdxList);
  return magicIdxList;
}