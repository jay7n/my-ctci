module.exports = function PermutationsWithDups(str) {
  function recursive(charSet) {
    if (charSet.length == 1) {
      return [[charSet[0]]];
    }
    let res = []; // point1 - keep it as local rather than global. a global res[] is very difficult to finish the job
    const charSetBeenUsed = new Set();
    for (let i = 0;  i < charSet.length; i++) {
      const c = charSet[i];
      if (!charSetBeenUsed.has(c)) {
        charSetBeenUsed.add(c);
        const nextRes = recursive(charSet.filter((_, idx) => idx != i)); // point2 - using idx rather than 'c' itself is important
        for (const elm of nextRes) {
          elm.unshift(c);
        }
        res = res.concat(nextRes);
      }
    }
    return res;
  }

  const res = recursive(str.split(''));

  const resStrs = res.map(perm => perm.join(''));
  console.log('PermutationsWithDups resStrs = ', resStrs);
  return resStrs;
}