module.exports = function TripleStep(n) {
  const tStart = new Date();
  const cache = [];
  for (let i = 1; i <= n; i++) {
    if (i <= 3) cache[i] = 1;
    else cache[i] = cache[i-1] + cache[i-2] + cache[i-3] + 3;
  }
  const tEnd = new Date();
  totalPossibleWays = cache[n];
  console.log(`TripleStep Solution3 for n = ${n}, totalPossibleWays = ${totalPossibleWays}, spent time = ${(tEnd - tStart)}ms`);
  return totalPossibleWays;
}