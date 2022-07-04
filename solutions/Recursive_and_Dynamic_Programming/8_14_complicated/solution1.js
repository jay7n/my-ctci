const { evalComplexExpr } = require('./helpers');
module.exports = function BooleanEvaluation(expression, desiredBool) {
  const finalRes = [];
  function recursive(exprArr, isFirst) { // isFirst is one of KEY idea hear!
    console.log('recursive exprArr = ', exprArr);
    if (exprArr.length == 1) {
      return exprArr;
    }
    const res = [
    ];

    if (exprArr.length > 1) {
      for (let i = 1; i < exprArr.length; i += 2) { // this incremental way is important
        const firstPart = exprArr.slice(0, i);
        // console.log('firstPart = ', firstPart);
        const secondPart = exprArr.slice(i + 1);
        // console.log('secondPart = ', secondPart);
        const firstResArr = recursive(firstPart, true);
        console.log('firstResArr = ', firstResArr);
        const secondResArr = recursive(secondPart, false)
        console.log('secondResArr = ', secondResArr);
        for (const firstRes of firstResArr) {
          for (const secondRes of secondResArr) {
            let expr = firstRes + exprArr[i] + secondRes;
            if (res.includes(expr) == false) {
              res.push(expr);
            }

            if (isFirst == false) { // This condition is vital important!
              expr = '(' + firstRes + exprArr[i] + secondRes + ')';
              if (res.includes(expr) == false) {
                res.push(expr);
              }
            }
          }
        }
      }
    }

    return res;
  }

  const exprArr = expression.split('');
  const allRes = recursive(exprArr, true);
  console.log('allRes = ', allRes);

  for (const res of allRes) {
    if (evalComplexExpr(res) == desiredBool) {
      finalRes.push(res);
    }
  }

  console.log('finalRes = ', finalRes);
  return finalRes.length;
}
