module.exports = function EightQueens(boardSize = 8) {
  function isUnavailableForGrid(x0, y0, x, y) {
    if (x < 0 || x > boardSize - 1) {
      return true;
    }
    if (y < 0 || y > boardSize - 1) {
      return true;
    }
    if (x === x0) {
      return true;
    }
    if (y === y0) {
      return true;
    }
    if (Math.abs(y - y0) === Math.abs(x - x0)) {
      return true;
    }

    return false;
  }

}