module.exports = function TripleStep(n) {
  function recursive(n) {
    let res;
    if (n <= 3) res = 1;
    else res = recursive(n - 1) + recursive(n - 2) + recursive(n - 3) + 3;
    return res;
  }

  const tStart = new Date().getTime();
  const totalPossibleWays = recursive(n);
  const tEnd = new Date().getTime();
  console.log(`TripleStep Solution1 for n = ${n}, totalPossibleWays = ${totalPossibleWays}, spent time = ${tEnd - tStart}ms`);
  return totalPossibleWays;
}