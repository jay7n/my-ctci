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

  function evalExpression(expr) {
    exprArr = expr.split('');
    let left, op, right;
    for (let i = 0; i < exprArr.length; i+=3) {
      if (left) {

      } else {
        left = exprArr[i];
        op = exprArr[i + 1];
        right = exprArr[i + 2];
        left = evalExpression(left, op, right);
      }
    }
  }
}