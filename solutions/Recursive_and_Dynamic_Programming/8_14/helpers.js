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

}

function evalComplexExpr(expr) {
  function recursive(exprArr) {
    let subExprArr = [];
    let i = 0;
    while (i < exprArr.length) {
      if (exprArr[i] == '(') {
        const rightIdx = findRightMatchingParenIdx(exprArr, i);
        const val = recursive(exprArr.slice(i+1, rightIdx));
        subExprArr.push(val);
        i = rightIdx + 1;
      } else {
        subExprArr.push(exprArr[i]);
        i++;
      }
    }
    return evalSimpleExpr(subExprArr.join(''));
  }
  const exprArr = expr.split('');
  recursive(exprArr);
}

module.exports = {
  evalSingleExpr,
  evalSimpleExpr,
  evalComplexExpr,
}