module.exports = function Parens(num) {
  const origNum = num;

  const parenSet = {
    left: num,
    right: num,
  };

  function recursive(parenSet) {
    let leftRes = [''];
    let rightRes = [''];
    if (parenSet.left > 0) {
      parenSet.left--;
      leftRes = recursive(parenSet);
      leftRes = leftRes.map(paren => {
        return '(' + paren;
      });
      parenSet.left++;
    }
    if (parenSet.right > 0) {
      parenSet.right--;
      rightRes = recursive(parenSet);
      rightRes = rightRes.map(paren => {
        return ')' + paren;
      });
    }

    return [].concat(leftRes, rightRes);
  }

  parenSet.left--;
  let res = recursive(parenSet);
  res = res.map(paren => {
    return '(' + paren;
  });

  console.log('Parens res = ', res);
  return res;
}