module.exports = function TripleStep(n) {
  const cache = [];

  function recursive(n) {
    let res;

    if (cache[n]) res = cache[n];
    else if (n <= 3) res = 1;
    else {
      res = recursive(n - 1) + recursive(n - 2) + recursive(n - 3) + 3;
      cache[n] = res;
    }
    return res;
  }

  const tStart = new Date();
  const totalPossibleWays = recursive(n);
  const tEnd = new Date();
  console.log(`TripleStep Solution2 for n = ${n}, totalPossibleWays = ${totalPossibleWays}, spent time = ${(tEnd - tStart)}ms`);
  return totalPossibleWays;
}