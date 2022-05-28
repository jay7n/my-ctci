module.exports = function TripleStep(n) {
  const tStart = new Date();
  if (n <= 3) return 1;

  let cache1 = 1;
  let cache2 = 1;
  let cache3 = 1;
  let totalPossibleWays = 0;
  for (let i = 4; i <= n; i++) {
    const res = cache1 + cache2 + cache3 + 3;
    switch (i % 3) {
      case 1:
        cache1 = res;
        break;
      case 2:
        cache2 = res;
        break;
      case 0:
        cache3 = res;
        break;
    }
    if (i === n) totalPossibleWays = res;
  }
  const tEnd = new Date();
  console.log(`TripleStep Solution4 for n = ${n}, totalPossibleWays = ${totalPossibleWays}, spent time = ${(tEnd - tStart)}ms`);
  return totalPossibleWays;
}