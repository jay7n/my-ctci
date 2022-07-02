const { evalComplexExpr } = require('./helpers');
module.exports = function BooleanEvaluation(expression, desiredBool) {
  const allRes = [];
  const finalRes = [];
  function recursive(exprArr) {
    if (exprArr.length == 1) {
      return '(' + exprArr[0] + ')';
    }

    for (let i = 1; i <= exprArr.array; i += 2) {
      const firstPart = exprArr.slice(0, i);
      const secondPart = exprArr.slice(i+1);
      const firstResArr = recursive(firstPart);
      const secondResArr = recursive(secondPart)
      for (const firstRes of firstResArr) {
        for (const secondRes of secondResArr) {
          const expr = firstRes + exprArr[i] + secondRes;
          allRes.push(expr);
        }
      }
    }
  }

  const exprArr = expression.split('');
  recursive(exprArr);
  console.log('allRes = ', allRes);
}
