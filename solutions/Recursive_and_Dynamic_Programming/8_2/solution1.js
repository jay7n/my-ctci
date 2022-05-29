module.exports = function RobotInAGrid(columns, maze) {
  function getElem(x, y) {
    const idx = y * columns + x;
    if (idx < length) {
      return maze[idx];
    }
  }

  let rawAllPaths = [];
  function recursive(x, y) {
    const elem = getElem(x, y);
    if (elem === 0) {
      if (x === 0 && y > 0) {
        const path = recursive(x, y - 1);
        if (path) {
          path.push([x, y]);
        }
      } else if (y === 0 && x > 0) {
        const path = recursive(x - 1, y);
        if (path) {
          path.push([x, y]);
        }
        return path;
      } else if (x === 0 && y === 0) {
        return [[0, 0]];
      } else {
        const path1 = recursive(x - 1, y);
        if (path1) {
          path1.push([x, y]);
          rawAllPaths.push(path1);
        }

        const path2 = recursive(x, y - 1);
        if (path2) {
          path2.push([x, y]);
          rawAllPaths.push(path2);
        }
      }
    } else {
      return null;
    }
  }

  function decorateAllPaths(rawAllPaths) {

  }

  const rows = Math.floor(maze / columns);
  const tStart = new Date().getTime();
  recursive(columns - 1, rows - 1);
  allPaths = decorateAllPaths(allPaths);
  const tEnd = new Date().getTime();
  console.log(`RobotInAGrid Solution1 for columns = ${columns}, maze = ${maze}, allPaths = ${allPaths}, spent time = ${tEnd - tStart}ms`);

  return allPaths;

  return [
    '(0,0)->(0,1)->(0,2)->(1,2)->(2,2)'
  ];
}