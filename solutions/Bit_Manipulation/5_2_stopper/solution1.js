module.exports = function BinaryToString(numVal) {
  let res = [];
  let cur = numVal;
  while (cur > 0) {
    // console.log('cur = ', cur);
    let elm = 0;
    cur = cur * 2;
    if (cur >= 1) {
      elm = 1;
      cur -= 1;
    }
    res.push(elm);
  }
  // console.log('res = ', res);
  return res.join('');
}