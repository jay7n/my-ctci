module.exports = function RecursiveMultiply(m, n) {
  function recursive(multiple) {
    if (multiple <= 1) {
      return m;
    }
    const halfMultiple = multiple >> 1;
    let res = recursive(halfMultiple);
    res+=res;
    if (halfMultiple << 1 !== multiple) { // this is an odd number 
      res+=m;
    }
    return res;
  }
  return recursive(n);
}