module.exports = function PaintFill(picArray, width, x, y, replacedTargetVal = 'X') {
  const height = picArray.length / width;
  const lookupCache = [];

  function pushToLookupCache(x, y) {
    const idx = y * width + x;
    lookupCache[idx] = true;
  }

  function existInLookupCache(x, y) {
    const idx = y * width + x;
    return lookupCache[idx];
  }

  function getValue(x, y) {
    const idx = y * width + x;
    return picArray[idx];
  }

  function setValue(x, y, val) {
    const idx = y * width + x;
    picArray[idx] = val;
  }

  function withinBoundary(x, y) {
    if ( 
      (x >= 0 && x < width) && 
      (y >= 0 && y < height)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function findSurroundings(x, y) {
    const res = [];

    if (withinBoundary(x-1, y-1)) {
      res.push([x-1, y-1]);
    }
    if (withinBoundary(x, y-1)) {
      res.push([x, y-1]);
    }
    if (withinBoundary(x+1, y-1)) {
      res.push([x+1, y-1]);
    }
    if (withinBoundary(x-1, y)) {
      res.push([x-1, y]);
    }
    if (withinBoundary(x+1, y)) {
      res.push([x+1, y]);
    }
    if (withinBoundary(x-1, y+1)) {
      res.push([x-1, y+1]);
    }
    if (withinBoundary(x, y+1)) {
      res.push([x, y+1]);
    }
    if (withinBoundary(x+1, y+1)) {
      res.push([x+1, y+1]);
    }

    return res;
  }

  function printPic() {
    let res = 'printPic = \n';
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const val = getValue(j, i);
        res += val + ' ';
      }
      res += '\n';
    }
    console.log(res);
  }

  function recursive(x, y, targetVal) {
    if (existInLookupCache(x, y)) {
      return;
    }
    pushToLookupCache(x, y);

    const val = getValue(x, y);
    if (val === targetVal) {
      setValue(x, y, replacedTargetVal);
    }

    const surrArea = findSurroundings(x, y);
    surrArea.map(([sx, sy]) => {
      recursive(sx, sy, targetVal);
    });
  }

  const targetVal = getValue(x, y);
  recursive(x, y, targetVal);

  printPic();

  return picArray;
}