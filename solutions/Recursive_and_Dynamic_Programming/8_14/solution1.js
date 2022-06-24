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

  }
}