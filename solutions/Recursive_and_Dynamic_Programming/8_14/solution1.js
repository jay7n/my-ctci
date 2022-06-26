module.exports = function BooleanEvaluation(expression, desiredBool) {
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

  function evalExpr(expr) {
    exprArr = expr.split('');
    let left = exprArr[0];
    let op, right;
    for (let i = 2; i < exprArr.length; i+=2) {
      right = exprArr[i];
      op = exprArr[i - 1];
      left = evalSingleExpr(left, op, right);
    }
    return left;
  }

  const result = evalExpr(expression);
  console.log('result of expression "', expression, '" is ', result);

  return result;
}