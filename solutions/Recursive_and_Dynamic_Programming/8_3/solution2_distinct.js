module.exports = function MagicIndex(array) {
  function recursive(start, end, array) {
    const mid = start + Math.floor((end - start) / 2); // point1 - don't remember to add start
    if (array[mid] > mid) {
      return recursive(start, mid-1, array);
    } else if (array[mid] < mid) {
      return recursive(mid+1, end, array);
    } else {
      return mid;
    }
  }

  return recursive(0, array.length - 1, array);
}