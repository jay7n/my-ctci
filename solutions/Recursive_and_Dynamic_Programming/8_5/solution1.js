module.exports = function RecursiveMultiply(m, n) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    res+=m;
  }
  return res;
}