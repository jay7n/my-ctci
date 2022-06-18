module.exports = function EightQueens(queenNum, boardWidth = 8, queenSign = 'X') {
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

  function printChessBoard(queensWay) {
    let res = [];
    for (let i = 0; i < boardWidth; i++) {
      for (let j = 0; j < boardWidth; j++) {
        const hasQueen = queensWay.findIndex(({x, y}) => {
          return x == j && y == i; 
        }) !== -1;
        if (hasQueen) {
          res.push(queenSign);
        } else {
          res.push('0');
        }
      }
      res.push('\n');
    }
    console.log('chess board with queensWay = ', queensWay, 'is:\n', res.join());
  }

  const takenList = [];
  const ways = [];
  recursive(0, 0, takenList, ways);

  console.log('ways = ', ways);
  console.log('ways length = ', ways.length);

  ways.map(way => {
    printChessBoard(way);
  });

  return ways.length;
}