module.exports = function BinaryToString(numVal) {
  let res = [];
  let cur = numVal;
  let error = false;
  while (cur > 0) {
    let elm = 0;
    cur = cur * 2;
    if (cur >= 1) {
      elm = 1;
      cur -= 1;
    }
    res.push(elm);

    if (res.length > 32) {
      error = true;
      break;
    }
  }
  // console.log('numVal = ', numVal, 'resStr = ', res.join(''));
  if (error) {
    return 'ERROR';
  } else {
    return res.join('');
  }
}