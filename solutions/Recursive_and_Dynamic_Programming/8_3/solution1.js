module.exports = function MagicIndex(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) {
      return i;
    }
  }
}