module.exports = function RobotInAGrid(columns, maze) {
  function getElem(x, y) {
    const idx = y * columns + x;
    if (idx < maze.length) {
      return maze[idx];
    }
  }

  function addNodeToPaths(node, paths) {
    for (const path of paths) {
      path.push(node);
    }
    return paths;
  }

  function recursive(x, y) {
    const elem = getElem(x, y);
    // console.log('x = ', x, 'y = ', y, 'elem = ', elem);
    if (elem === 0) {
      let paths = [];
      let prevPaths;
      if (x === 0 && y > 0) {
        prevPaths = recursive(x, y - 1);
        if (prevPaths.length > 0) {
          paths = paths.concat(addNodeToPaths([x, y], prevPaths));
        }
      } else if (y === 0 && x > 0) {
        prevPaths = recursive(x - 1, y);
        if (prevPaths.length > 0) {
          paths = paths.concat(addNodeToPaths([x, y], prevPaths));
        }
      } else if (x === 0 && y === 0) {
        paths.push([[0,0]]);
      } else {
        const prevPaths1 = recursive(x - 1, y);
        if (prevPaths1.length > 0) {
          paths = paths.concat(addNodeToPaths([x, y], prevPaths1));
        }

        const prevPaths2 = recursive(x, y - 1);
        if (prevPaths2.length > 0) {
          paths = paths.concat(addNodeToPaths([x, y], prevPaths2));
        }
      }
      console.log('paths = ', paths);
      return paths;
    } else {
      return [];
    }
  }

  function decorateAllPaths(rawAllPaths) {
    return rawAllPaths.map(path => {
      return path.map(([x, y]) => {
        return `(${x},${y})`;
      }).join('->');
    });
  }

  const rows = Math.floor(maze.length / columns);
  const tStart = new Date().getTime();
  const rawAllPaths = recursive(columns - 1, rows - 1);
  console.log('rawAllPaths = ', rawAllPaths);
  const allPaths = decorateAllPaths(rawAllPaths);
  const tEnd = new Date().getTime();
  console.log(`RobotInAGrid Solution1 for columns = ${columns}, maze = ${maze}, spent time = ${tEnd - tStart}ms and allPaths =`, allPaths);

  return allPaths;

}