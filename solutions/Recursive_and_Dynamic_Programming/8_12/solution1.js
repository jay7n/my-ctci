module.exports = function EightQueens(queenNum, boardWidth = 8) {
  const boardSize = boardWidth * boardWidth;

  function isAvailableForGrid(x0, y0, x, y) {
    if (x < 0 || x > boardWidth - 1) {
      return false;
    }
    if (y < 0 || y > boardWidth - 1) {
      return false;
    }
    if (x === x0) {
      return false;
    }
    if (y === y0) {
      return false;
    }
    if (Math.abs(y - y0) === Math.abs(x - x0)) {
      return false;
    }
    return true;
  }

  function recursive(startRow, startColumn, takenList, ways) {
    for (let y = startRow; y < boardWidth; y++) {
      let x = (y === startRow) ? startColumn : 0;
      for (; x < boardWidth; x++) {
        let allPassed = true;
        for (const takenElm of takenList) {
          if (false == isAvailableForGrid(takenElm.x, takenElm.y, x, y)) {
            allPassed = false;
          }
        }
        if (allPassed) {
          takenList.push({x, y});
          if (takenList.length === queenNum ) {
            ways.push(takenList.slice());
            takenList.splice(0, takenList.length);
          } else {
            let nextRow, nextColumn;
            if (x === boardWidth - 1) {
              nextColumn = 0;
              nextRow = y + 1;
            } else {
              nextColumn = x + 1;
              nextRow = y;
            }
            recursive(nextRow, nextColumn, takenList);
          }
        }
      }
    }
  }

}