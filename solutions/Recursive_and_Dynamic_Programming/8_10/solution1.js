module.exports = function PaintFill(picArray, width, x, y) {
  const height = picArray.length / width;

  function getValue(x, y) {

  }

  function setValue(x, y, val) {

  }

  function findSurroundings(x, y) {

  }

  function recursive(x, y) {
    const value = getValue(x, y);
    setValue(x, y, 'X');
    const s = findSurroundings(x, y);
  }

  const res = recursive(x, y);

  console.log('PaintFill res = ', res);
  return res;
}