module.exports = function Parens(num) {
  const origNum = num;

  const parenSet = {
    left: num,
    right: num,
  };

  function recursive(parenSet) {
    if (parenSet.left === parenSet.right && parenSet.right  === 0) {
      return [''];
    }
    let leftRes = [];
    if (parenSet.left > 0) {
      leftRes = recursive({ left: parenSet.left - 1, right: parenSet.right });
      leftRes = leftRes.map(paren => {
        return '(' + paren;
      });
  }

    let rightRes = [];
    if (parenSet.right > 0 && parenSet.left < parenSet.right) {
      rightRes = recursive({left: parenSet.left, right: parenSet.right - 1});
      rightRes = rightRes.map(paren => {
        return ')' + paren;
      });
    }

    // console.log('leftRes = ', leftRes, 'rightRes = ', rightRes);
    return [].concat(leftRes, rightRes);
  }

  const res = recursive(parenSet);
  console.log('Parens res = ', res);
  return res;
}