module.exports = function EightQueens(queenNum, boardWidth = 8) {
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
          const cpyTakenList = takenList.slice();
          cpyTakenList.push({x, y});
          if (cpyTakenList.length === queenNum) {
            ways.push(cpyTakenList);
          } else {
            let nextRow, nextColumn;
            if (x === boardWidth - 1) {
              nextColumn = 0;
              nextRow = y + 1;
            } else {
              nextColumn = x + 1;
              nextRow = y;
            }
            recursive(nextRow, nextColumn, cpyTakenList, ways);
          }
        }
      }
    }
  }

  const takenList = [];
  const ways = [];
  recursive(0, 0, takenList, ways);

  console.log('ways = ', ways);
  console.log('ways length = ', ways.length);

  return ways;
}