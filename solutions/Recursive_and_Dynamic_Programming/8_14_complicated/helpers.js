function evalSingleExpr(left, op, right) {
  switch (op) {
    case '&':
      return left & right;
    case '|':
      return left | right;
    case '^':
      return left ^ right;
  }
}

function evalSimpleExpr(expr) {
  const exprArr = expr.split('');
  let left = exprArr[0];
  let op, right;
  for (let i = 2; i < exprArr.length; i+=2) {
    right = exprArr[i];
    op = exprArr[i - 1];
    left = evalSingleExpr(left, op, right);
  }
  return left;
}

function findRightMatchingParenIdx(exprArr, leftParenIdx) {
  let count = 1;
  let i = leftParenIdx + 1;
  while (i < exprArr.length) {
    if (exprArr[i] == '(') count++;
    else if (exprArr[i] == ')') count--;

    if (count === 0 ) {
      return i;
    }
    i++;
  }
  assert('should not happen');
}

function evalComplexExpr(expr) {
  function recursive(exprArr) {
    // console.log('evalComplexExpr recursive exprArr = ', exprArr);
    let subExprArr = [];
    let i = 0;
    while (i < exprArr.length) {
      // console.log('exprArr = ', exprArr, 'i = ', i, 'exprArr[i] = ', exprArr[i]);
      if (exprArr[i] == '(') {
        const rightIdx = findRightMatchingParenIdx(exprArr, i);
        // console.log('rightIdx= ', rightIdx);
        const val = recursive(exprArr.slice(i+1, rightIdx));
        // console.log('val = ', val);
        subExprArr.push(val);
        i = rightIdx + 1;
      } else {
        subExprArr.push(exprArr[i]);
        i++;
      }
    }
    // console.log('subExprArr = ', subExprArr);
    return evalSimpleExpr(subExprArr.join(''));
  }
  const exprArr = expr.split('');
  return recursive(exprArr);
}

module.exports = {
  evalSingleExpr,
  evalSimpleExpr,
  evalComplexExpr,
}