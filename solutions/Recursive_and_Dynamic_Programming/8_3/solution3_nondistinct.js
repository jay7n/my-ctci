module.exports = function MagicIndex(array) {
  const todos = [];
  const discarded = [];

  function recursive(idx, array) {
    if ( idx >=0 && idx < array.length) {
      const val = array[idx];
      if (val < idx) {

      } else if (val > idx) {

      } else {
        return idx;
      }
    } else {

    }
  }
}