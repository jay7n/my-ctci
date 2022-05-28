module.exports = function TripleStep(n) {
  let res;
  if (n <=3) res = 1;
  else res = TripleStep(n-1) + TripleStep(n-2) + TripleStep(n-3) + 3;
  console.log(`TripleStep for n = ${n}, res = ${res}`);
  return res;
}