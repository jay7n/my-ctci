const { evalComplexExpr } = require('./helpers');
module.exports = function BooleanEvaluation(expression, desiredBool) {
  const result = evalExpr(expression);
  console.log('result of expression "', expression, '" is ', result);

  return result;
}
